import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectSubCategories } from 'shares/store/shop/shop.selector';
import { removeSubCategoryFromSubCategories } from 'shares/store/shop/shop.action';
import { httpDeleteSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

import './sub-category.styles.scss';
import CardLink from 'components/card-link/card-link.component';

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
        console.log(deletedSubCategory);
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
    <CardLink
      isDeleting={isDeleting}
      slug={slug}
      handleDelete={handleDelete}
      name={name}
      endpoint={`/admin/dashboard/sub-categories/${slug}`}
    />
  );
};

export default SubCategory;
