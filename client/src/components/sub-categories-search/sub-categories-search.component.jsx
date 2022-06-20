import { useDispatch, useSelector } from 'react-redux';

import SearchBar from 'components/search-bar/search-bar.component';
import SubCategoriesContainer from 'components/sub-categories-container/sub-categories-container.component';

import { selectSearchedSubCategories } from 'shares/store/shop/shop.selector';
import { setSubCategoriesSearchText } from 'shares/store/shop/shop.action';

const SubCategoriesSearch = () => {
  const searchedSubCategories = useSelector(selectSearchedSubCategories);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const input = e.target;

    const searchText = input.value;
    // TODO: Change to string-similarity npm package
    dispatch(setSubCategoriesSearchText(searchText));
  };
  return (
    <div>
      <h2>Sub categories available</h2>
      <SearchBar handleChange={handleSearch} />
      <SubCategoriesContainer subCategories={searchedSubCategories} />
    </div>
  );
};

export default SubCategoriesSearch;
