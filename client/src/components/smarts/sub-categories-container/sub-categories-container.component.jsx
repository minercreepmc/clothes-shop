import SubCategory from 'components/smarts/sub-category/sub-category.component';

const SubCategoriesContainer = ({ subCategories }) => {
  return (
    <>
      {subCategories.map((subCategory) => (
        <SubCategory subCategory={subCategory} key={subCategory._id} />
      ))}
    </>
  );
};

export default SubCategoriesContainer;
