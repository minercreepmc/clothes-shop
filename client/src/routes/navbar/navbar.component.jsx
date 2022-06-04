import Brand from 'components/brand/brand.component';
import NavContainer from 'components/nav/nav.component';
import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="mb-5">
        <Container fluid>
          <Brand>TIN.PHAM</Brand>
          <NavContainer />
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarContainer;
