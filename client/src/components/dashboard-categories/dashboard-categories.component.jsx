import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import FormGroup from 'components/form-group/form-group.component';
import Categories from 'components/categories/categories.component';

import { selectCategories } from 'shares/store/shop/shop.selector';
import { selectCurrentUser } from 'shares/store/user/user.selector';

import { httpPostCategory } from 'shares/hooks/requests/categories/category-requests.hook';
import { addCategoryToCategories } from 'shares/store/shop/shop.action';
import SearchBar from 'components/search-bar/search-bar.component';

const categoryTemplate = {
  name: '',
};

const DashboardCategories = () => {
  const categories = useSelector(selectCategories);
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const [category, setCategory] = useState(categoryTemplate);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [isLoading, setIsLoading] = useState(false);

  const { name } = category;

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Please fill in the category name');
      return;
    }

    try {
      setIsLoading(true);
      const newCategory = await httpPostCategory({
        category,
        accessToken: user.accessToken,
      });
      dispatch(addCategoryToCategories(newCategory, categories));
      setCategory(categoryTemplate);
      toast.success('Create successfully');
    } catch (errors) {
      console.log(errors);
      errors.forEach((error) => {
        toast.error(error.message);
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target;
    setCategory({ name: input.value });
  };

  const handleSearch = (e) => {
    const input = e.target;

    // TODO: Change to string-similarity npm package
    const newCategories = categories.filter(
      (category) =>
        category.name.toLowerCase().includes(input.value.toLowerCase()) ||
        input.value.toLowerCase().includes(category.name.toLowerCase()),
    );
    setFilteredCategories(newCategories);
  };

  return (
    <div>
      <Form className="mb-5" onSubmit={handleCreateCategory}>
        <FormGroup
          name="category"
          type="text"
          label="Create category"
          placeholder="Create new category"
          value={name}
          onChange={handleChange}
        />
        <Button variant="dark" type="submit" disabled={isLoading}>
          {!isLoading ? 'Create' : 'Creating...'}
        </Button>
      </Form>

      <div>
        <h2>Categories available</h2>
        <SearchBar handleChange={handleSearch} />
        <Categories categories={filteredCategories} />
      </div>
    </div>
  );
};

export default DashboardCategories;
