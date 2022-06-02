import { Navbar, Nav } from 'react-bootstrap';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavContainer = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Shop</Nav.Link>
          <Nav.Link>Contact Me</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="auth">
            Login
          </Nav.Link>
          <Nav.Link>
            <MdOutlineShoppingCart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavContainer;
