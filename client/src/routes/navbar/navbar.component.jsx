import Brand from 'components/brand/brand.component';
import NavBarNavs from 'components/navbar-navs/navbar-navs.component';
import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="mb-5">
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
