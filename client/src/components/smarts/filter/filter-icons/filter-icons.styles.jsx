import styled, { css } from 'styled-components';

const singleIcon = css`
  margin-left: 30px;
`;

export const FilterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const IconLink = styled.li`
  display: inline-block;
  cursor: pointer;
`;

export const GridIcons = styled.ul`
  ${singleIcon};

  margin-bottom: 0;

  ${IconLink} {
    margin-left: 20px;
    color: #ccc;

    &:hover {
      color: white;
    }
    &.active {
      color: #333;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const AdvanceFilterIcons = styled.div`
  ${singleIcon};

  cursor: pointer;

  font-weight: 500;

  position: relative;

  color: ${(props) => props.theme.colors.white};

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: auto;

    width: 0;
    height: 1px;

    content: '';
    transition: 0.3s;

    background-color: white;
  }

  &.active {
    color: #333;
  }
  &.active::after {
    right: auto;
    left: 0;

    width: 100%;
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
