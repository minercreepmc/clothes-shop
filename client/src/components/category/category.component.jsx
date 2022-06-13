import { useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { httpDeleteCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { selectCategories } from 'shares/store/shop/shop.selector';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { removeCategoryFromCategories } from 'shares/store/shop/shop.action';

const Category = ({ category }) => {
  const { name, slug } = category;
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (slug) => {
    setIsDeleting(true);
    // TODO: fancy this by bulding async modal
    const confirmDelete = window.confirm('Do you want to delete category?');
    if (confirmDelete) {
      const deletedCategory = await httpDeleteCategory({
        slug,
        accessToken: currentUser.accessToken,
      });
      dispatch(removeCategoryFromCategories(deletedCategory, categories));
      toast.success('Deleted category successful');
    }
    setIsDeleting(false);
  };

  return (
    <Card>
      <Card.Body className="d-flex justify-content-between">
        <span>{name}</span>
        <span>
          {isDeleting && (
            <Spinner animation="border" size="sm" variant="danger"></Spinner>
          )}

          <button onClick={() => handleDelete(slug)}>
            <FaRegTrashAlt color="#d9534f " />
          </button>
        </span>
      </Card.Body>
    </Card>
  );
};

export default Category;
