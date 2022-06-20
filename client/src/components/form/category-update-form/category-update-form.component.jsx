import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from 'components/form-group/form-input/form-input.component';
import {
  httpGetCategory,
  httpPutCategory,
} from 'shares/hooks/requests/categories/category-requests.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { useForm } from 'react-hook-form';
import PrimaryButton from 'components/button/primary-button/primary-button.component';
import { updateCategoryToCategories } from 'shares/store/shop/shop.action';
import { selectCategories } from 'shares/store/shop/shop.selector';
import { useContext, useEffect } from 'react';
import { DashboardCategoryUpdateContext } from 'shares/contexts/dashboard-category-update.context';

const CategoryUpdateForm = () => {
  const { isUpdating, setIsUpdating, category, setCategory } = useContext(
    DashboardCategoryUpdateContext,
  );

  console.log(category);
  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: category.name },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const onSubmit = async (data) => {
    try {
      setIsUpdating(true);
      const updatedCategory = await httpPutCategory({
        category: { ...data, slug },
        accessToken: admin.accessToken,
      });
      dispatch(updateCategoryToCategories(updatedCategory, categories));
      reset();
      toast.success('Update category successful');
      navigate('/admin/dashboard/categories');
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
    toast.error('Please provide all required fields');
  };

  useEffect(() => {
    const getCurrentCategory = async () => {
      const currentCategory = await httpGetCategory({ slug });
      setCategory(currentCategory);
      reset(currentCategory);
    };

    getCurrentCategory();
  }, [slug, setCategory, reset]);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        label="Update category"
        name="name"
        type="text"
        rule={{ required: true }}
        defaultValue={category.name}
        control={control}
      />

      <PrimaryButton variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </PrimaryButton>
    </Form>
  );
};

export default CategoryUpdateForm;
