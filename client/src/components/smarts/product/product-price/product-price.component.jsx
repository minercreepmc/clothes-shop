import {
  ProductPriceContainer,
  ProductDiscountedPrice,
  ProductMainPrice,
} from './product-price.styles';

const ProductPrice = ({ price, discount, ...otherProps }) => {
  const discoutedPrice = price - price * (discount / 100);
  return (
    <ProductPriceContainer {...otherProps}>
      {discount && <ProductMainPrice> {price}$</ProductMainPrice>}
      <ProductDiscountedPrice>
        {discount ? discoutedPrice.toFixed(2) : price}$
      </ProductDiscountedPrice>
    </ProductPriceContainer>
  );
};

export default ProductPrice;
