import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import { logOutUser } from 'shares/utils/firebase/firebase.utils';

const NavBarNavs = () => {
  const currentUser = useSelector(selectCurrentUser);

  const handleLogOut = async () => await logOutUser();

  const navigate = useNavigate();

  const handleRoleBaseNavigate = async () => {
    if (currentUser.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/user/dashboard');
    }
  };

  return (
    <>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto" navbarScroll>
          <Nav.Link href="#featured">Featured</Nav.Link>
          <Nav.Link href="#categories">Categories</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link>
            <MdOutlineShoppingCart />
          </Nav.Link>

          {!currentUser ? (
            <Nav.Link as={Link} to="auth">
              Login
            </Nav.Link>
          ) : (
            <NavDropdown align="end" title={<FaUserAlt />}>
              <NavDropdown.Item onClick={handleRoleBaseNavigate}>
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavBarNavs;
