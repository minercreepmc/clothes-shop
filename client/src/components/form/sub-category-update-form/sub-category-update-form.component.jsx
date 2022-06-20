import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormSelect from 'components/form-group/form-select/form-select.component';
import FormInput from 'components/form-group/form-input/form-input.component';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import {
  selectCategories,
  selectSubCategories,
} from 'shares/store/shop/shop.selector';
import {
  httpGetSubCategory,
  httpPutSubCategory,
} from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { DashboardSubCategoryUpdateContext } from 'shares/contexts/dashboard-sub-category-update.context';
import { updateSubCategoryToSubCategories } from 'shares/store/shop/shop.action';

const SubCategoryUpdateForm = () => {
  // TODO:
  const { handleSubmit, control, reset } = useForm({});

  const { slug } = useParams();

  const { setIsUpdating, isUpdating, subCategory, setSubCategory } = useContext(
    DashboardSubCategoryUpdateContext,
  );

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setIsUpdating(true);
      const updatedSubCategory = await httpPutSubCategory({
        subCategory: { ...data, slug },
        accessToken: admin.accessToken,
      });
      dispatch(
        updateSubCategoryToSubCategories(updatedSubCategory, subCategories),
      );
      toast.success('Update category successful');
      reset();
      navigate('/admin/dashboard/sub-categories');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const onError = (error) => {
    console.warn(error);
    toast.error('Please provide all fields');
  };

  useEffect(() => {
    const getCurrentSubCategory = async () => {
      const currentSubCategory = await httpGetSubCategory({ slug });
      setSubCategory(currentSubCategory);
      reset(currentSubCategory);
    };

    getCurrentSubCategory();
  }, [slug, reset, setSubCategory]);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormSelect
        name="categoryId"
        label="Category"
        id="select-sub"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        {categories?.map((category, index) => (
          <option
            value={category.slug}
            selected={category._id === subCategory.parent}
            key={index}
          >
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormInput
        label="Update category"
        name="name"
        id="name"
        defaultValue=""
        type="text"
        rules={{ required: true }}
        control={control}
      />

      <PrimaryButton variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </PrimaryButton>
    </Form>
  );
};

export default SubCategoryUpdateForm;
