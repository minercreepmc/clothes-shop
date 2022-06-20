import SubCategoriesForm from 'components/form/sub-categories-form/sub-categories-form.component';
import SubCategoriesSearch from 'components/sub-categories-search/sub-categories-search.component';

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
