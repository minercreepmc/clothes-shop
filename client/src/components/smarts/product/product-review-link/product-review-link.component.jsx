const ProductReviewLink = ({ ...otherProps }) => {
  const REVIEWS = 0;
  return (
    <span {...otherProps}>
      <a>({REVIEWS} customer reviews)</a>
    </span>
  );
};

export default ProductReviewLink;
