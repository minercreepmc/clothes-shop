import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormSelect from 'components/form-group/form-select/form-select.component';
import FormInput from 'components/form-group/form-input/form-input.component';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

import {
  selectCategories,
  selectSubCategories,
} from 'shares/store/shop/shop.selector';
import { httpPostSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { addSubCategoryToSubCategories } from 'shares/store/shop/shop.action';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { DashboardSubcategoriesContext } from 'shares/contexts/dashboard-sub-categories.context';

const SubCategoriesForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: '', categoryId: '' },
  });

  const { isCreating, setIsCreating } = useContext(
    DashboardSubcategoriesContext,
  );

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setIsCreating(true);
      const newSubCategory = await httpPostSubCategory({
        subCategory: data,
        accessToken: admin.accessToken,
      });
      dispatch(addSubCategoryToSubCategories(newSubCategory, subCategories));
      reset();
      toast.success('Create successfully');
    } catch (errors) {
      console.log(errors);
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsCreating(false);
    }
  };

  const onError = (error) => {
    console.warn(error);
    toast.error('Please provide all fields');
  };

  return (
    <Form className="mb-5" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormSelect
        name="categoryId"
        label="Choose a cateogory"
        id="category"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      >
        <option value="">--Chose a category--</option>
        {categories.map((category, index) => (
          <option key={index} value={category._id}>
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormInput
        name="name"
        type="text"
        label="Create sub category"
        id="sub-category"
        defaultValue=""
        rules={{ required: true }}
        control={control}
      />

      <PrimaryButton
        variant="outline-secondary"
        type="submit"
        disabled={isCreating}
      >
        {!isCreating ? 'Create' : 'Creating...'}
      </PrimaryButton>
    </Form>
  );
};

export default SubCategoriesForm;
