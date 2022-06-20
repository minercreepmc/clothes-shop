import Brand from 'components/reusables/brand/brand.component';
import NavBarNavs from 'components/smarts/navbar-navs/navbar-navs.component';
import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import './navbar.styles.scss';

const NavbarContainer = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="mb-5 navbar">
        <Container fluid>
          <Brand>TIN.PHAM</Brand>
          <NavBarNavs />
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarContainer;
