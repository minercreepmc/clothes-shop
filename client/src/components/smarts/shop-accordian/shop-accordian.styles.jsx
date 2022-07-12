import styled, { css } from 'styled-components';

const singleSidebarWidgetList = css`
  li {
    font-size: 15px;

    padding: 10px 0;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const hasChildrenStyled = css`
  position: relative;
`;

export const SingleSidebarWidgetListCategories = styled.ul`
  ${singleSidebarWidgetList};

  li {
    padding: 0;

    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0;
    }

    a::after {
      transition: 0s;

      background-color: #ccc;
    }

    ${({ hasChildren }) => hasChildren && hasChildrenStyled};
  }
`;
