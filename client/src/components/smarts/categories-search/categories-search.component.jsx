import { useDispatch, useSelector } from 'react-redux';

import SearchBar from 'components/reusables/search-bar/search-bar.component';
import CategoriesContainer from 'components/smarts/categories-container/categories-container.component';

import { selectSearchedCategories } from 'shares/store/categories/categories.selector';
import { setCategoriesSearchText } from 'shares/store/categories/categories.action';

const CategoriesSearch = () => {
  const searchedCategories = useSelector(selectSearchedCategories);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const { value } = e.target;

    // TODO: Change to string-similarity npm package
    dispatch(setCategoriesSearchText(value));
  };
  return (
    <div>
      <h2>Categories available</h2>
      <SearchBar handleChange={handleSearch} />
      <CategoriesContainer categories={searchedCategories} />
    </div>
  );
};

export default CategoriesSearch;
