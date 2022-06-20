import { useSelector, useDispatch } from 'react-redux';

import Categories from 'components/categories/categories.component';
import SearchBar from 'components/search-bar/search-bar.component';
import CategoriesForm from 'components/form/categories-form/categories-form.component';

import { selectSearchedCategories } from 'shares/store/shop/shop.selector';
import { setCategoriesSearchText } from 'shares/store/shop/shop.action';

const DashboardCategories = () => {
  const searchedCategories = useSelector(selectSearchedCategories);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const { value } = e.target;

    // TODO: Change to string-similarity npm package
    dispatch(setCategoriesSearchText(value));
  };

  return (
    <div>
      <CategoriesForm />
      <div>
        <h2>Categories available</h2>
        <SearchBar handleChange={handleSearch} />
        <Categories categories={searchedCategories} />
      </div>
    </div>
  );
};

export default DashboardCategories;
