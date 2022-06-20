import SubCategoriesForm from 'components/smarts/form/sub-categories-form/sub-categories-form.component';
import SubCategoriesSearch from 'components/smarts/sub-categories-search/sub-categories-search.component';

const DashboardSubCategory = () => {
  return (
    <div>
      <h1 className="fw-bold">Create sub category</h1>
      <SubCategoriesForm />

      <SubCategoriesSearch />
    </div>
  );
};

export default DashboardSubCategory;
