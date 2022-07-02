import { useSelector } from 'react-redux';
import { selectProducts } from 'shares/store/products/products.selector';
import ProductsContainer from 'components/smarts/products-container/products-container.component';
import ProductPreview from 'components/smarts/product-preview/product-preview.component';

const DashboardProducts = () => {
  const products = useSelector(selectProducts);

  return <ProductsContainer products={products} Card={ProductPreview} />;
};

export default DashboardProducts;
