import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

import { truncateText } from 'shares/utils/logics/logics.utils';

import { httpDeleteProduct } from 'shares/hooks/requests/products/products.hook';
import { selectCurrentUser } from 'shares/store/user/user.selector';
import { removeProductFromProducts } from 'shares/store/products/products.action';
import { selectProducts } from 'shares/store/products/products.selector';

import './product.styles.scss';

const ProductPreview = ({ product }) => {
  const { title, description, images, price, subcategories, slug } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const admin = useSelector(selectCurrentUser);
  const products = useSelector(selectProducts);

  const handleDelele = async () => {
    const confirmDelete = window.confirm('Do you want to delete product');

    if (!confirmDelete) {
      return;
    }
    const deletedProduct = await httpDeleteProduct({
      slug,
      accessToken: admin.accessToken,
    });

    dispatch(removeProductFromProducts(deletedProduct, products));
  };

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
        <Card.Text className="product-text">
          {truncateText(description, 50)}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <PrimaryButton variant="primary" onClick={() => navigate(slug)}>
            Edit
          </PrimaryButton>
          <PrimaryButton variant="primary" onClick={handleDelele}>
            Delete
          </PrimaryButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductPreview;
