import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import {
  selectIsSubCategoryDeleting,
  selectSubCategories,
} from 'shares/store/sub-categories/sub-categories.selector';
import { deleteSubCategoryFromSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';

import './sub-category.styles.scss';
import CardLink from 'components/reusables/card-link/card-link.component';
import { useState } from 'react';

const SubCategory = ({ subCategory }) => {
  const { name, slug } = subCategory;
  const dispatch = useDispatch();

  const admin = useSelector(selectCurrentUser);
  const subCategories = useSelector(selectSubCategories);
  const isSubCategoryDeleting = useSelector(selectIsSubCategoryDeleting);

  const [isDeleting, setIsDeleting] = useState(isSubCategoryDeleting);

  const handleDelete = async (slug) => {
    try {
      // TODO: fancy this by bulding async modal
      const confirmDelete = window.confirm('Do you want to delete category?');
      if (confirmDelete) {
        dispatch(
          deleteSubCategoryFromSubCategoriesAsync(
            slug,
            subCategories,
            admin.accessToken,
          ),
        );
        toast.success('Deleted category successful');
      }
    } catch (errors) {
      toast.error('Delete category failed');
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
