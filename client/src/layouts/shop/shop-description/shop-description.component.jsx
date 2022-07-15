import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetProduct } from 'shares/hooks/requests/products/products.hook';
import ShopProductRating from '../shop-product-rating/shop-product-rating.component';
import {
  ShopDescriptionContainer,
  ShopProductTitle,
} from './shop-description.styles';

const ShopDescription = ({ ...otherProps }) => {
  // const [product, setProduct] = useState();

  // const { slug } = useParams();

  // useEffect(() => {
  //   const fetchCurrentProduct = async () => {
  //     const currentProduct = await httpGetProduct({ slug });
  //     setProduct(currentProduct);
  //   }

  //   fetchCurrentProduct();
  // }, []);
  return (
    <ShopDescriptionContainer {...otherProps}>
      <ShopProductRating className="mb-15" />
      <ShopProductTitle className="mb-15"></ShopProductTitle>
    </ShopDescriptionContainer>
  );
};

export default ShopDescription;
