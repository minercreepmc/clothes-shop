import { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DashboardProductsContext } from 'shares/contexts/dashboard-products.context';
import { httpGetProducts } from 'shares/hooks/requests/products/products.hook';
import Product from '../product/product.component';

const ProductsContainer = () => {
  const { products, setProducts } = useContext(DashboardProductsContext);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await httpGetProducts({});
      setProducts(products);
    };

    loadProducts();
  }, [setProducts]);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
