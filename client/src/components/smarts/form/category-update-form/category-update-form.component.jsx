import { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import {
  httpGetCategory,
  httpPutCategory,
} from 'shares/hooks/requests/categories/category-requests.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { updateCategoryToCategories } from 'shares/store/shop/shop.action';
import { selectCategories } from 'shares/store/shop/shop.selector';
import { DashboardCategoryUpdateContext } from 'shares/contexts/dashboard-category-update.context';

const CategoryUpdateForm = () => {
  const { isUpdating, setIsUpdating, category, setCategory } = useContext(
    DashboardCategoryUpdateContext,
  );

  console.log(category);
  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsUpdating(true);
      const updatedCategory = await httpPutCategory({
        category: { ...category, slug },
        accessToken: admin.accessToken,
      });
      dispatch(updateCategoryToCategories(updatedCategory, categories));
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

  useEffect(() => {
    const getCurrentCategory = async () => {
      const currentCategory = await httpGetCategory({ slug });
      console.log(currentCategory, slug);
      setCategory(currentCategory);
    };

    getCurrentCategory();
  }, [slug, setCategory]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        label="Update category"
        name="name"
        type="text"
        value={category.name}
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />

      <PrimaryButton variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </PrimaryButton>
    </Form>
  );
};

export default CategoryUpdateForm;
