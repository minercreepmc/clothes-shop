import Category from 'components/smarts/category/category.component';

const CategoriesContainer = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </>
  );
};

export default CategoriesContainer;