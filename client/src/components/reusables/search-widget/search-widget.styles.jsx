import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;

  input {
    font-size: 14px;
    line-height: 19px;

    width: 100%;
    height: 40px;
    margin: 0;
    padding-right: 20px;
    padding-left: 0;
    color: ${(props) => props.theme.colors.white};
    border-radius: 0;

    border: none;
    border-bottom: 2px solid #3e4446;
    background: transparent;
    background-clip: padding-box;
    &:hover,
    &:focus {
      background: transparent;
      border-color: ${(props) => props.theme.colors.gray};
      color: ${(props) => props.theme.colors.white};
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 0;

    border: none;
    background-color: transparent !important;
    > svg {
      font-size: 18px;
      line-height: 40px;

      color: #ababab;
    }
  }
`;
