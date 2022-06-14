import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import FormGroup from 'components/form-group/form-group.component';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import {
  selectCategories,
  selectSubCategories,
} from 'shares/store/shop/shop.selector';
import { httpPutCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { toast } from 'react-toastify';
import { updateSubCategoryToSubCategories } from 'shares/store/shop/shop.action';
import {
  httpGetSubCategory,
  httpPutSubCategory,
} from 'shares/hooks/requests/sub-categories/sub-categories.hook';

const subCategoryTemplate = {
  name: '',
};

const DashboardSubCategoriesUpdate = () => {
  const user = useSelector(selectCurrentUser);
  const subCategories = useSelector(selectSubCategories);
  const categories = useSelector(selectCategories);

  const [subCategory, setSubCategory] = useState(subCategoryTemplate);
  const [isUpdating, setIsUpdating] = useState(false);
  const { slug } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name } = subCategory;

  useEffect(() => {
    const getCurrentSubCategory = async () => {
      const currentSubCategory = await httpGetSubCategory({ slug });
      setSubCategory(currentSubCategory);
    };

    getCurrentSubCategory();
  }, [slug]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsUpdating(true);
      const updatedSubCategory = await httpPutSubCategory({
        subCategory: { ...subCategory, slug },
        accessToken: user.accessToken,
      });
      setSubCategory(subCategoryTemplate);
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
    const input = e.target;

    setSubCategory({ ...subCategory, name: input.value });
  };

  return (
    <Form onSubmit={handleUpdateCategory}>
      <Form.Label htmlFor="select-sub">Choose a category</Form.Label>
      <Form.Select id="select-sub" name="parent" aria-label="Parent Category">
        {categories.map((category, index) => (
          <option
            value={category.slug}
            selected={category._id === subCategory.parent}
            key={index}
          >
            {category.name}
          </option>
        ))}
      </Form.Select>

      <FormGroup
        label="Update category"
        name="name"
        type="text"
        value={subCategory.name}
        onChange={handleChange}
      />

      <Button variant="dark" type="submit" disabled={isUpdating}>
        {!isUpdating ? 'Update' : 'Updating...'}
      </Button>
    </Form>
  );
};

export default DashboardSubCategoriesUpdate;
