import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import ProductImagesGallery from 'components/smarts/product/product-images-gallery/product-images-gallery.component';
import { ShopWrapper } from 'pages/shop-page/shop-page.styles';
import { ProductDetailContainer } from './shop-product.styles';
import ShopDescription from 'layouts/shop/shop-description/shop-description.component';
import { httpGetProduct } from 'shares/hooks/requests/products/products.hook';

const ShopProduct = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getCurrentProduct = async () => {
      try {
        const currentProduct = await httpGetProduct({ slug });

        if (!currentProduct) return;

        setProduct(currentProduct);
      } catch (errors) {
        setError(errors);
      }
    };

    getCurrentProduct();
  }, [slug]);

  return error ? (
    <span>Product did not exist</span>
  ) : (
    product && (
      <ShopWrapper className="mt-100 mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <ProductDetailContainer>
                <Row className="pb-100">
                  <Col lg={6} className="mb-md-70 mb-sm-70">
                    <ProductImagesGallery product={product} />
                  </Col>
                  <Col lg={6}>
                    <ShopDescription />
                  </Col>
                </Row>
              </ProductDetailContainer>
            </Col>
          </Row>
        </Container>
      </ShopWrapper>
    )
  );
};

export default ShopProduct;
