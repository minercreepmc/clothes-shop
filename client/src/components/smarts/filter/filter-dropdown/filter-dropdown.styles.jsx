import styled, { css } from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 10px;

  border-radius: 0;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

export const FilterDropdown = styled.div`
  ${List} {
    z-index: 99;

    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    pointer-events: auto;

    opacity: 1;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
