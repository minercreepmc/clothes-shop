import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { selectCategories } from 'shares/store/categories/categories.selector';
import { selectSubCategories } from 'shares/store/sub-categories/sub-categories.selector';

import { httpPostSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import { addSubCategoryToSubCategories } from 'shares/store/sub-categories/sub-categories.action';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { DashboardSubcategoriesContext } from 'shares/contexts/dashboard-sub-categories.context';

const SubCategoriesForm = () => {
  const {
    isCreating,
    setIsCreating,
    subCategory,
    setSubCategory,
    INITIAL_SUB_CATEGORY_STATE,
  } = useContext(DashboardSubcategoriesContext);

  const { name, categoryId } = subCategory;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !categoryId) {
      toast.error('Please provide all required fields');
      return;
    }

    try {
      setIsCreating(true);
      const newSubCategory = await httpPostSubCategory({
        subCategory,
        accessToken: admin.accessToken,
      });
      dispatch(addSubCategoryToSubCategories(newSubCategory, subCategories));
      setSubCategory(INITIAL_SUB_CATEGORY_STATE);
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
