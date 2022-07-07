import styled, { css } from 'styled-components';

const filterTitleTypeTwo = css``;

export const ShopHeader = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #3b4042;
`;

export const FilterTitle = styled.div`
  li {
    font-size: 48px;
    line-height: 64px;
    display: inline-block;
    cursor: pointer;
    transition: 0.6s;
    color: #ccc;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 40px;
      line-height: 50px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 40px;
    }
    :hover {
      color: #333;
    }

    :first-child {
      padding-left: 0;
    }
    &.active {
      color: #333;
    }
  }
`;
