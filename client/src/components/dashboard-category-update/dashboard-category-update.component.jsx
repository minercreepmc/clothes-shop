import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import FormGroup from 'components/form-group/form-group.component';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectCategories } from 'shares/store/shop/shop.selector';
import {
  httpGetCategory,
  httpPutCategory,
} from 'shares/hooks/requests/categories/category-requests.hook';
import { toast } from 'react-toastify';
import { updateCategoryToCategories } from 'shares/store/shop/shop.action';

const categoryTemplate = {
  name: '',
};

const DashboardCategoryUpdate = () => {
  const user = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);

  const [category, setCategory] = useState(categoryTemplate);
  const [isUpdating, setIsUpdating] = useState(false);
  const { slug } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentCategory = async () => {
      const currentCategory = await httpGetCategory({ slug });
      setCategory(currentCategory);
    };

    getCurrentCategory();
  }, [slug]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    try {
      setIsUpdating(true);
      const updatedCategory = await httpPutCategory({
        category: { ...category, slug },
        accessToken: user.accessToken,
      });
      setCategory(categoryTemplate);
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

  const handleChange = (e) => {
    const input = e.target;

    setCategory({ ...category, name: input.value });
  };

  return (
    <Form onSubmit={handleUpdateCategory}>
      <FormGroup
        label="Update category"
        name="name"
        type="text"
        value={category.name}
        onChange={handleChange}
      />

      <Button variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </Button>
    </Form>
  );
};

export default DashboardCategoryUpdate;
