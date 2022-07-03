import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesContainer } from './home-categories.styles';

import HomeCategory from 'components/smarts/home-category/home-category.component';

import ForMen from 'assets/img/categories/thumbnails/1.jpg';
import ForWomen from 'assets/img/categories/thumbnails/2.jpg';
import Accessories from 'assets/img/categories/thumbnails/3.jpg';

const categories = [
  { name: 'For Men', thumbnail: ForMen },
  { name: 'FOr Women', thumbnail: ForWomen },
  { name: 'Accessories', thumbnail: Accessories },
];

const HomeCategories = () => {
  return (
    <CategoriesContainer>
      <Container fluid className="p-0">
        <Row className="g-0">
          {categories.map((category) => (
            <Col sm={6} lg={4} key={category.name}>
              <HomeCategory category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </CategoriesContainer>
  );
};

export default HomeCategories;
