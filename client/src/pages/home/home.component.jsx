import Footer from 'layouts/footer/footer.component';
import HomeCategories from 'layouts/home-categories/home-categories.component';
import HomeContact from 'layouts/home-contact/home-contact.component';
import HomeHeader from 'layouts/home-header/home-header.component';
import HomeServices from 'layouts/home-services/home-services.component';
import ProductsFeatured from 'layouts/products-featured/products-featured.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'shares/store/user/user.selector';

const Home = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <>

      <HomeHeader />
      <ProductsFeatured id="featured" />
      <HomeServices id="services" />
      <HomeCategories id="categories" />
      <HomeContact id="contact" />
      <Footer />
    </>
  );
};

export default Home;
