import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Brand } from 'components/reusables/brand/brand.styles';

export const NavBarBrand = styled(Brand)`
  font-weight: 700;
  color: #212529;
  margin-right: 1em;

  &:hover {
    color: #f4623a;
  }

  @media (min-width: 992px) {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const NavBar = styled(Navbar)`
  transition: background-color 0.2s ease;
  z-index: 1;

  &.navbar-scrolled {
    background-color: #1c1e1f;
    color: #212529;
  }

  @media (min-width: 992px) {
    background-color: transparent;
  }
`;
