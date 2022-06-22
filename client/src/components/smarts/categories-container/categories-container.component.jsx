import Category from 'components/smarts/category/category.component';

const CategoriesContainer = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <Category key={category._id} category={category} />
      ))}
    </>
  );
};

export default CategoriesContainer;
