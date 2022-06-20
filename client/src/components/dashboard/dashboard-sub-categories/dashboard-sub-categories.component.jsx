import { useDispatch, useSelector } from 'react-redux';

import { selectSearchedSubCategories } from 'shares/store/shop/shop.selector';

import { setSubCategoriesSearchText } from 'shares/store/shop/shop.action';

import SubCategories from 'components/sub-categories/sub-categories.component';
import SearchBar from 'components/search-bar/search-bar.component';
import SubCategoriesForm from 'components/form/sub-categories-form/sub-categories-form.component';

const DashboardSubCategory = () => {
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
      <h1 className="fw-bold">Create sub category</h1>
      <SubCategoriesForm />

      <div>
        <h2>Sub categories available</h2>
        <SearchBar handleChange={handleSearch} />
        <SubCategories subCategories={searchedSubCategories} />
      </div>
    </div>
  );
};

export default DashboardSubCategory;
