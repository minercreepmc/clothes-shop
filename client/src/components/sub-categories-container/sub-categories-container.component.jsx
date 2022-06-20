import SubCategory from 'components/sub-category/sub-category.component';

const SubCategoriesContainer = ({ subCategories }) => {
  return (
    <>
      {subCategories.map((subCategory, index) => (
        <SubCategory key={index} subCategory={subCategory} />
      ))}
    </>
  );
};

export default SubCategoriesContainer;
