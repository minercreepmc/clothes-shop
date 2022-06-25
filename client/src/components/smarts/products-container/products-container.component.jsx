import { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DashboardProductsContext } from 'shares/contexts/dashboard-products.context';
import { httpGetProductsForAdmin } from 'shares/hooks/requests/products/products.hook';
import Product from '../product/product.component';

const ProductsContainer = () => {
  const { products, setProducts } = useContext(DashboardProductsContext);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await httpGetProductsForAdmin({
        descriptionTruncate: 30,
      });
      setProducts(products);
    };

    loadProducts();
  }, [setProducts]);

  return (
    <Container fluid>
      <Row className="justify-content-center ">
        {products &&
          products.map((product) => (
            <Col className='h-100' key={product._id} sm={6} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
