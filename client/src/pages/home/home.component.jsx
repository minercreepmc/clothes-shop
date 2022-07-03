import HomeCategories from 'layouts/home-categories/home-categories.component';
import HomeHeader from 'layouts/home-header/home-header.component';
import HomeServices from 'layouts/home-services/home-services.component';
import ProductsFeatured from 'layouts/products-featured/products-featured.component';

const Home = () => {
  return (
    <section>
      <HomeHeader />
      <ProductsFeatured />
      <HomeServices id="services" />
      <HomeCategories id="categories" />
    </section>
  );
};

export default Home;
