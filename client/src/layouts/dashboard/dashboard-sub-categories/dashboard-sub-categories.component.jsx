import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SubCategoriesForm from 'components/smarts/form/sub-categories-form/sub-categories-form.component';
import SubCategoriesSearch from 'components/smarts/sub-categories-search/sub-categories-search.component';
import { fetchSubCategoriesAsync } from 'shares/store/sub-categories/sub-categories.action';

const DashboardSubCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubCategoriesAsync());
  }, [dispatch]);

  return (
    <div>
      <h1 className="fw-bold">Create sub category</h1>
      <SubCategoriesForm />

      <SubCategoriesSearch />
    </div>
  );
};

export default DashboardSubCategory;
