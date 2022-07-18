import ProductPrice from 'components/smarts/product/product-price/product-price.component';
import ShopProductRating from '../shop-product-rating/shop-product-rating.component';
import {
  ShopDescriptionContainer,
  ShopProductTitle,
  ShopProductPrice,
  ShopProductShortDescription,
} from './shop-description.styles';

const ShopDescription = ({ product, ...otherProps }) => {
  const { title, price, discount, description } = product;
  return (
    <ShopDescriptionContainer {...otherProps}>
      <ShopProductRating className="mb-15" />
      <ShopProductTitle className="mb-15">{title}</ShopProductTitle>
      <ShopProductPrice className="mb-30">
        <ProductPrice price={price} discount={discount} />
      </ShopProductPrice>
      <ShopProductShortDescription className="mb-50">
        {description}
      </ShopProductShortDescription>
    </ShopDescriptionContainer>
  );
};

export default ShopDescription;
