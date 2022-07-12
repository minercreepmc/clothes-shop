import styled from 'styled-components';

export const SidebarPriceContainer = styled.div``;

export const SliderContainer = styled.div`
  position: relative;

  width: 96%;
  height: 7px;
  margin: 7px 0;

  border-radius: 50px;
  background-color: #2c2c2c;
  input {
    font-size: 14px;
    font-weight: 500;

    color: #777;
    border: none;

    @media only screen and (min-width: 1200px) and (max-width: 1499px) {
      width: 69%;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      width: 69%;
    }
  }
`;

export const SliderRange = styled.div`
  position: absolute;
  top: 0;

  height: 100%;

  background-color: #333;
`;

export const SliderHandle = styled.div`
  position: absolute;
  top: -5px;

  display: block;

  width: 17px;
  height: 17px;

  transition: none;

  border-radius: 50px;
  background-color: #333;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`;
