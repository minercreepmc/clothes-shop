import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CardLink from 'components/reusables/card-link/card-link.component';

import {
  selectCategories,
  selectIsDeleting,
} from 'shares/store/categories/categories.selector';
import { deleteCategoryFromCategoriesAsync } from 'shares/store/categories/categories.action';
import { selectCurrentUser } from 'shares/store/user/user.selector';

const Category = ({ category }) => {
  const { name, slug } = category;
  const dispatch = useDispatch();

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const isDeleting = useSelector(selectIsDeleting);

  const handleDelete = async (slug) => {
    try {
      // TODO: fancy this by bulding async modal
      const confirmDelete = window.confirm('Do you want to delete category?');
      if (confirmDelete) {
        dispatch(
          deleteCategoryFromCategoriesAsync(
            slug,
            categories,
            admin.accessToken,
          ),
        );
        toast.success('Deleted category successful');
      }
    } catch (errors) {
      console.log(errors);
      toast.error('Delete category failed');
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
