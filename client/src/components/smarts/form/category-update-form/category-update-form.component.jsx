import { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';

import { updateCategoryToCategoriesAsync } from 'shares/store/categories/categories.action';
import {
  selectCategories,
  selectIsCategoryUpdating,
} from 'shares/store/categories/categories.selector';

import { DashboardCategoryUpdateContext } from 'shares/contexts/dashboard-category-update.context';

const CategoryUpdateForm = () => {
  const { category, setCategory } = useContext(DashboardCategoryUpdateContext);
  const [haveCategory, setHaveCategory] = useState(false);

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const isUpdating = useSelector(selectIsCategoryUpdating);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        updateCategoryToCategoriesAsync(
          category,
          categories,
          admin.accessToken,
        ),
      );
      toast.success('Update category successful');
      navigate('/admin/dashboard/categories');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    }
  };

  useEffect(() => {
    const getCurrentCategory = async () => {
      const currentCategory = await httpGetCategory({ param: slug });
      if (!currentCategory) return;

      setCategory(currentCategory);
      setHaveCategory(true);
    };
    getCurrentCategory();
  }, [slug, setCategory, setHaveCategory]);

  return haveCategory ? (
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
  ) : (
    <span>Category did not exist :()</span>
  );
};

export default CategoryUpdateForm;
