import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { httpPostSubCategory } from 'shares/hooks/requests/sub-categories/sub-categories.hook';

import {
  selectCategories,
  selectSubCategories,
} from 'shares/store/shop/shop.selector';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { addSubCategoryToSubCategories } from 'shares/store/shop/shop.action';

import FormGroup from 'components/form-group/form-group.component';
import SubCategories from 'components/sub-categories/sub-categories.component';

const subCategoryTemplate = {
  name: '',
  parent: '',
};

const DashboardSubCategory = () => {
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);
  const admin = useSelector(selectCurrentUser);

  const [subCategory, setSubCategory] = useState(subCategoryTemplate);
  const [isCreating, setIsCreating] = useState(false);

  const dispatch = useDispatch();

  const { name, parent } = subCategory;

  const handleChange = (e) => {
    const input = e.target;
    setSubCategory({ ...subCategory, name: input.value });
  };

  const handleChooseParent = async (e) => {
    const input = e.target;
    const category = await httpGetCategory({ slug: input.value });

    setSubCategory({ ...subCategory, parent: category._id });
  };

  const handleCreateSubCategory = async (e) => {
    e.preventDefault();

    if (!name || !parent) {
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
            name="parent"
            aria-label="Default select example"
            defaultValue=""
            onChange={handleChooseParent}
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
          name="sub-category"
          type="text"
          label="Create sub category"
          placeholder="Create sub new category"
          value={name}
          onChange={handleChange}
        />

        <Button variant="dark" type="submit" disabled={isCreating}>
          {!isCreating ? 'Create' : 'Creating...'}
        </Button>
      </Form>

      <SubCategories subCategories={subCategories} />
    </div>
  );
};

export default DashboardSubCategory;
