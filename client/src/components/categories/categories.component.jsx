import Category from 'components/category/category.component';

const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </>
  );
};

export default Categories;
