import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CardLink from 'components/reusables/card-link/card-link.component';

import { selectCategories } from 'shares/store/shop/shop.selector';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { removeCategoryFromCategories } from 'shares/store/shop/shop.action';
import { httpDeleteCategory } from 'shares/hooks/requests/categories/category-requests.hook';

const Category = ({ category }) => {
  const { name, slug } = category;
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (slug) => {
    try {
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
    } catch (errors) {
      console.log(errors);
      toast.error('Delete category failed');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <CardLink
      name={name}
      handleDelete={handleDelete}
      isDeleting={isDeleting}
      slug={slug}
      endpoint={`/admin/dashboard/categories/${slug}`}
    />
  );
};

export default Category;
