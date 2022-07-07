import styled, { css } from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 10px;

  border-radius: 0;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

const niceSelect = css`
  padding-right: 35px;
  padding-left: 0;

  border-top: none;
  border-right: none;
  border-bottom: 2px solid #cccccc;
  border-left: none;
  border-radius: 0;
  background-color: #ffffff;

  ${List} {
    z-index: 99;

    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    pointer-events: auto;

    opacity: 1;
  }
`;

export const FilterDropdown = styled.div`
  ${niceSelect};
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
