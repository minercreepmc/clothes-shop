import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNavs = () => {
  return (
    <Nav className="flex-column fw-bold">
      <Nav.Link className="text-dark" as={Link} to="">
        Informations
      </Nav.Link>
      <Nav.Link className="text-dark" as={Link} to="wishlist">
        Wishlist
      </Nav.Link>
    </Nav>
  );
};

export default DashboardNavs;
