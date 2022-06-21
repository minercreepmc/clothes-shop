import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { DashboardCategoriesContext } from 'shares/contexts/dashboard-categories.context';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectCategories } from 'shares/store/shop/shop.selector';

import { httpPostCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { addCategoryToCategories } from 'shares/store/shop/shop.action';

const CategoriesForm = () => {
  const {
    category,
    setCategory,
    INITIAL_CATEGORY_STATE,
    isCreating,
    setIsCreating,
  } = useContext(DashboardCategoriesContext);

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category.name === '') {
      toast.error('Please provide category name');
      return;
    }

    try {
      setIsCreating(true);
      const newCategory = await httpPostCategory({
        category,
        accessToken: admin.accessToken,
      });
      dispatch(addCategoryToCategories(newCategory, categories));
      setCategory(INITIAL_CATEGORY_STATE);
      toast.success('Create successfully');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <FormInput
        name="name"
        label="Create category"
        type="text"
        placeholder="Create new category"
        id="category-name"
        value={category.name}
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />
      <PrimaryButton variant="dark" type="submit" disabled={isCreating}>
        {!isCreating ? 'Create' : 'Creating...'}
      </PrimaryButton>
    </Form>
  );
};
export default CategoriesForm;
