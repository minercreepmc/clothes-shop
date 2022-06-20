import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Brand = ({ children }) => {
  return (
    <Navbar.Brand as={Link} to="/">
      {children}
    </Navbar.Brand>
  );
};

export default Brand;
