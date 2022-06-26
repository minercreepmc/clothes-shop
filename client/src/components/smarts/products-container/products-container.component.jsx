import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectProducts } from 'shares/store/products/products.selector';
import ProductPreview from 'components/smarts/product-preview/product-preview.component';

const ProductsContainer = () => {
  const products = useSelector(selectProducts);

  return (
    <Container fluid>
      <Row className="justify-content-center ">
        {products &&
          products.map((product) => (
            <Col className="h-100" key={product._id} sm={6} md={6} lg={4}>
              <ProductPreview product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
