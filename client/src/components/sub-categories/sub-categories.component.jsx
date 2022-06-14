import SubCategory from 'components/sub-category/sub-category.component';

const SubCategories = ({ subCategories }) => {
  return (
    <>
      {subCategories.map((subCategory, index) => (
        <SubCategory key={index} subCategory={subCategory} />
      ))}
    </>
  );
};

export default SubCategories;
