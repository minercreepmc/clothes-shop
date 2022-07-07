import styled, { css } from 'styled-components';

const activeFilter = css`
  color: #333;
`;

export const ProductFilterMenu = styled.ul``;

export const FilterTitle = styled.div``;

export const ProductFilter = styled.li`
  display: inline-block;

  cursor: pointer;
  transition: 0.6s;

  color: #ccc;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 0 20px;
  padding-left: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${({ active }) => active && activeFilter};

  &:first-child {
    padding-left: 0;
  }
  &:hover {
    color: #333;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 15px;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 5px;
  }
`;
