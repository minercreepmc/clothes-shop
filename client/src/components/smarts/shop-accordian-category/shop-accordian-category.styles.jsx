import styled, { css } from 'styled-components';

export const Quantity = styled.span`
  float: right;

  margin-right: 20px;

  color: #999;
`;

export const ButtonLink = styled.a`
  position: relative;

  color: ${({ active }) => (active ? '#333' : '#999')};
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: auto;

    width: 0;
    height: 1px;

    content: '';
    transition: 0.3s;

    background-color: #333;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    right: auto;
    left: 0;

    width: 100%;
  }
`;

export const ExpandIcon = styled(ButtonLink)`
  position: absolute;
  top: 0;
  right: 0;
  transition: 0s;
  &::after {
    display: none;
  }
`;

export const ChildrenList = styled.ul`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

export const List = styled.li`
  font-size: 15px;

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
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

const hasChildrenStyled = css`
  ${ChildrenList} {
    margin-top: 10px;
    ${List} {
      padding: 0;
      padding-bottom: 10px;
      padding-left: 10px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;
