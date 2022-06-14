import { useState } from 'react';
import { Button, Card, Spinner, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectSubCategories } from 'shares/store/shop/shop.selector';
import { removeSubCategoryFromSubCategories } from 'shares/store/shop/shop.action';
import { httpDeleteSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

const SubCategory = ({ subCategory }) => {
  const { name, slug } = subCategory;
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const subCategories = useSelector(selectSubCategories);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (slug) => {
    try {
      setIsDeleting(true);
      // TODO: fancy this by bulding async modal
      const confirmDelete = window.confirm('Do you want to delete category?');
      if (confirmDelete) {
        const deletedSubCategory = await httpDeleteSubCategory({
          slug,
          accessToken: currentUser.accessToken,
        });
        dispatch(
          removeSubCategoryFromSubCategories(deletedSubCategory, subCategories),
        );
        toast.success('Deleted category successful');
      }
    } catch (errors) {
      console.log(errors);
      toast.error('Delete category failed');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <Card.Body className="d-flex justify-content-between">
        <span>{name}</span>
        <Stack direction="horizontal" gap={2}>
          {isDeleting && (
            <Spinner animation="border" size="sm" variant="danger"></Spinner>
          )}

          <Link to={`/admin/dashboard/sub-categories/${slug}`}>
            <FaEdit />
          </Link>
          <button onClick={() => handleDelete(slug)}>
            <FaRegTrashAlt color="#d9534f " />
          </button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default SubCategory;
