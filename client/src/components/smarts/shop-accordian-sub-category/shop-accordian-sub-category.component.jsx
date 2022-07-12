import { useDispatch } from 'react-redux';

import { SubCategory } from './shop-accordian-sub-category.styles';

import { ButtonLink } from '../shop-accordian-category/shop-accordian-category.styles';
import { fetchProductsAsync } from 'shares/store/products/products.action';

const ShopAccordianSubCategory = ({ subCategory }) => {
  const dispatch = useDispatch();

  const setProducts = () => {
    dispatch(fetchProductsAsync({ subCategoryId: subCategory._id }));
  };

  return (
    <SubCategory key={subCategory._id}>
      <ButtonLink onClick={setProducts}>{subCategory.name}</ButtonLink>
    </SubCategory>
  );
};

export default ShopAccordianSubCategory;
