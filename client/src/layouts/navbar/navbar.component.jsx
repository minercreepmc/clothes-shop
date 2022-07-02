import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

import NavBarNavs from 'components/smarts/navbar-navs/navbar-navs.component';
import { NavBar, NavBarBrand } from './navbar.styles';
const NavbarContainer = () => {
  const [navBarClassName, setNavBarClassName] = useState('');

  const handleScroll = (className) => {
    if (className !== 'navbar-scolled' && window.scrollY >= 100) {
      setNavBarClassName('navbar-scrolled');
    } else if (className === 'navbar-scrolled' && window.scrollY < 100) {
      setNavBarClassName('navbar-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(navBarClassName));
  }, [navBarClassName]);

  return (
    <>
      <NavBar
        expand="lg"
        variant="dark"
        fixed="top"
        className={navBarClassName}
      >
        <Container fluid className="px-4 px-lg-5">
          <NavBarBrand as={Link} to="/">
            TIN.PHAM
          </NavBarBrand>

          <NavBarNavs />
        </Container>
      </NavBar>
      <Outlet />
    </>
  );
};

export default NavbarContainer;
