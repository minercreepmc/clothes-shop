import { Card, Stack } from 'react-bootstrap';

import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import './product.styles.scss';

const Product = ({ product }) => {
  const { title, description, images, price, subcategories } = product;
  console.log(product);
  return (
    <Card className="product">
      <Card.Img
        variant="top"
        src={images[0].secure_url}
        className="product-image"
      />
      <Card.Body>
        <Card.Title
          as={'h3'}
          className="product-title d-flex justify-content-between"
        >
          <span>{title}</span>

          <small className="lead">{price}$</small>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {subcategories.map((subcategory, index) => (
            <span key={index}>
              {subcategory.name}
              <span> </span>
            </span>
          ))}
        </Card.Subtitle>
        <Card.Text className="product-text">{description}</Card.Text>
        <div className="d-flex justify-content-around">
          <PrimaryButton variant="primary">Edit</PrimaryButton>
          <PrimaryButton variant="primary">Delete</PrimaryButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
