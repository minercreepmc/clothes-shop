import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { selectCategories } from 'shares/store/categories/categories.selector';
import {
  selectIsSubCategoryCreating,
  selectSubCategories,
} from 'shares/store/sub-categories/sub-categories.selector';

import { addSubCategoryToSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { DashboardSubcategoriesContext } from 'shares/contexts/dashboard-sub-categories.context';

const SubCategoriesForm = () => {
  const { subCategory, setSubCategory, INITIAL_SUB_CATEGORY_STATE } =
    useContext(DashboardSubcategoriesContext);

  const { name, categoryId } = subCategory;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);
  const isCreating = useSelector(selectIsSubCategoryCreating);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !categoryId) {
      toast.error('Please provide all required fields');
      return;
    }

    try {
      dispatch(
        addSubCategoryToSubCategoriesAsync(
          subCategory,
          subCategories,
          admin.accessToken,
        ),
      );
      setSubCategory(INITIAL_SUB_CATEGORY_STATE);
      toast.success('Create successfully');
    } catch (errors) {
      errors.forEach((error) => {
        toast.error(error.message);
      });
    }
  };

  const handleGenericChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setSubCategory({ ...subCategory, [name]: value });
  };

  return (
    <Form
      className="mb-5"
      onSubmit={handleSubmit}
      onChange={handleGenericChange}
    >
      <FormSelect
        name="categoryId"
        label="Choose a cateogory"
        id="category"
        value={categoryId}
        onChange={() => { }}
      >
        <option value="">--Chose a category--</option>
        {categories.map((category) => (
          <option value={category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </FormSelect>

      <FormInput
        name="name"
        type="text"
        label="Create sub category"
        id="sub-category"
        value={name}
        onChange={() => { }}
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
