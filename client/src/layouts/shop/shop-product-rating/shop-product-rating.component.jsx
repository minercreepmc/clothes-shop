import ProductRating from 'components/smarts/product/product-rating/product-rating.component';
import ProductReviewLink from 'components/smarts/product/product-review-link/product-review-link.component';
import { ShopProductRatingContainer } from './shop-product-rating.styles';

const ShopProductRating = ({ ...otherProps }) => {
  return (
    <ShopProductRatingContainer {...otherProps}>
      <ProductRating />
      <ProductReviewLink className="ml-20" />
    </ShopProductRatingContainer>
  );
};

export default ShopProductRating;
