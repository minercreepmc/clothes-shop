import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { httpPostSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

import {
  selectCategories,
  selectSubCategories,
  selectSearchedSubCategories,
} from 'shares/store/shop/shop.selector';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import {
  addSubCategoryToSubCategories,
  setSubCategoriesSearchText,
} from 'shares/store/shop/shop.action';

import FormGroup from 'components/form-group/form-input/form-input.component';
import SubCategories from 'components/sub-categories/sub-categories.component';
import SearchBar from 'components/search-bar/search-bar.component';
import PrimaryButton from 'components/button/primary-button/primary-button.component';

const subCategoryTemplate = {
  name: '',
  categoryId: '',
};

const DashboardSubCategory = () => {
  const [subCategory, setSubCategory] = useState(subCategoryTemplate);
  const [isCreating, setIsCreating] = useState(false);
  const { name, categoryId } = subCategory;

  const admin = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);
  const searchedSubCategories = useSelector(selectSearchedSubCategories);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const input = e.target;
    setSubCategory({ ...subCategory, name: input.value });
  };

  const handleChooseCategory = async (e) => {
    const input = e.target;
    const category = await httpGetCategory({ slug: input.value });

    setSubCategory({ ...subCategory, categoryId: category._id });
  };

  const handleSearch = (e) => {
    const input = e.target;

    const searchText = input.value;
    // TODO: Change to string-similarity npm package
    dispatch(setSubCategoriesSearchText(searchText));
  };

  const handleCreateSubCategory = async (e) => {
    e.preventDefault();

    console.log(subCategory);
    if (!name || !categoryId) {
      toast.error('Please fill all the required fields');
      return;
    }

    try {
      setIsCreating(true);
      const newSubCategory = await httpPostSubCategory({
        subCategory,
        accessToken: admin.accessToken,
      });
      dispatch(addSubCategoryToSubCategories(newSubCategory, subCategories));
      setSubCategory(subCategoryTemplate);
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

  return (
    <div>
      <h1 className="fw-bold">Create sub category</h1>
      <Form className="mb-5" onSubmit={handleCreateSubCategory}>
        <div className="mb-3">
          <Form.Label htmlFor="select-sub">Choose a category</Form.Label>
          <Form.Select
            id="select-sub"
            name="categoryId"
            aria-label="Default select example"
            defaultValue=""
            onChange={handleChooseCategory}
          >
            <option></option>
            {categories.map((category, index) => (
              <option key={index} value={category.slug}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>

        <FormGroup
          name="name"
          type="text"
          label="Create sub category"
          placeholder="Create sub new category"
          value={name}
          onChange={handleChange}
        />

        <PrimaryButton
          variant="outline-secondary"
          type="submit"
          disabled={isCreating}
        >
          {!isCreating ? 'Create' : 'Creating...'}
        </PrimaryButton>
      </Form>

      <div>
        <h2>Sub categories available</h2>
        <SearchBar handleChange={handleSearch} />
        <SubCategories subCategories={searchedSubCategories} />
      </div>
    </div>
  );
};

export default DashboardSubCategory;
