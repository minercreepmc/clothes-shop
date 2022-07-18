import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { selectCategories } from 'shares/store/categories/categories.selector';
import {
  selectIsSubCategoryUpdating,
  selectSubCategories,
} from 'shares/store/sub-categories/sub-categories.selector';

import { httpGetSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { updateSubCategoryToSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';

import { INITIAL_SUB_CATEGORY_STATE } from './sub-category-update-form.constant';

const SubCategoryUpdateForm = () => {
  // TODO:
  const { slug } = useParams();
  const [subCategory, setSubCategory] = useState(INITIAL_SUB_CATEGORY_STATE);

  const [haveSubCategory, setHaveSubCategory] = useState(false);

  const { name, categoryId } = subCategory;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);
  const isUpdating = useSelector(selectIsSubCategoryUpdating);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        updateSubCategoryToSubCategoriesAsync(
          subCategory,
          subCategories,
          admin.accessToken
        )
      );
      toast.success('Update category successful');
      navigate('/admin/dashboard/sub-categories');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubCategory({ ...subCategory, [name]: value });
  };

  useEffect(() => {
    const getCurrentSubCategory = async () => {
      const currentSubCategory = await httpGetSubCategory({ param: slug });
      if (!currentSubCategory) return;

      setSubCategory(currentSubCategory);
      setHaveSubCategory(true);
    };

    getCurrentSubCategory();
  }, [slug, setSubCategory, setHaveSubCategory]);

  return haveSubCategory ? (
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
  ) : (
    <span>Sub Category did not exist :(</span>
  );
};

export default SubCategoryUpdateForm;
