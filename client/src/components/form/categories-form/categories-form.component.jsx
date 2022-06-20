import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormInput from 'components/form-group/form-input/form-input.component';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

import { DashboardCategoriesContext } from 'shares/contexts/dashboard-categories.context';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectCategories } from 'shares/store/shop/shop.selector';

import { httpPostCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { addCategoryToCategories } from 'shares/store/shop/shop.action';

const CategoriesForm = () => {
  const { isCreating, setIsCreating } = useContext(DashboardCategoriesContext);

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    name: '',
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      setIsCreating(true);
      const newCategory = await httpPostCategory({
        category: data,
        accessToken: admin.accessToken,
      });
      dispatch(addCategoryToCategories(newCategory, categories));
      reset();
      toast.success('Create successfully');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsCreating(false);
    }
  };

  const onError = (errors) => {
    toast.error('Please fill in the category name');
    console.warn(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} className="mb-5">
      <FormInput
        name="name"
        label="Create category"
        type="text"
        placeholder="Create new category"
        id="category-name"
        defaultValue=""
        rules={{ required: 'Please provide category name' }}
        control={control}
      />
      <PrimaryButton variant="dark" type="submit" disabled={isCreating}>
        {!isCreating ? 'Create' : 'Creating...'}
      </PrimaryButton>
    </Form>
  );
};
export default CategoriesForm;
