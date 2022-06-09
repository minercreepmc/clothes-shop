import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNavs = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="">
        Informations
      </Nav.Link>
      <Nav.Link as={Link} to="wishlist">
        Wishlist
      </Nav.Link>
    </Nav>
  );
};

export default DashboardNavs;
