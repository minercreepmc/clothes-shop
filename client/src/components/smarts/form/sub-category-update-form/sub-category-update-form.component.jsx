import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectCategories } from 'shares/store/categories/categories.selector';
import { selectSubCategories } from 'shares/store/sub-categories/sub-categories.selector';

import {
  httpGetSubCategory,
  httpPutSubCategory,
} from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { DashboardSubCategoryUpdateContext } from 'shares/contexts/dashboard-sub-category-update.context';
import { updateSubCategoryToSubCategories } from 'shares/store/sub-categories/sub-categories.action';

const SubCategoryUpdateForm = () => {
  // TODO:
  const { slug } = useParams();

  const { setIsUpdating, isUpdating, subCategory, setSubCategory } = useContext(
    DashboardSubCategoryUpdateContext,
  );

  const { name, categoryId } = subCategory;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(subCategory);
    try {
      setIsUpdating(true);
      const updatedSubCategory = await httpPutSubCategory({
        subCategory: { ...subCategory, slug },
        accessToken: admin.accessToken,
      });
      dispatch(
        updateSubCategoryToSubCategories(updatedSubCategory, subCategories),
      );
      toast.success('Update category successful');
      navigate('/admin/dashboard/sub-categories');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubCategory({ ...subCategory, [name]: value });
    console.log(subCategory);
  };

  useEffect(() => {
    const getCurrentSubCategory = async () => {
      const currentSubCategory = await httpGetSubCategory({ slug });
      setSubCategory(currentSubCategory);
    };

    getCurrentSubCategory();
  }, [slug, setSubCategory]);

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <FormSelect
        name="categoryId"
        label="Category"
        id="select-sub"
        value={categoryId}
        onChange={() => { }}
      >
        {categories?.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormInput
        label="Update category"
        name="name"
        id="name"
        type="text"
        value={name}
        onChange={() => { }}
      />

      <PrimaryButton variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </PrimaryButton>
    </Form>
  );
};

export default SubCategoryUpdateForm;
