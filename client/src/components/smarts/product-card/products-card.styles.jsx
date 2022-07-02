import styled from 'styled-components';

export const IconButtonGroup = styled.ul`
  position: absolute;
  bottom: -41px;
  left: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
  object-fit: cover;
  object-position: top 10px center;
  transition: all 0.3s;
`;

export const SingleProduct = styled.div`
  margin-bottom: 26px;

  &:hover ${IconButtonGroup} {
    bottom: 30px;
    opacity: 1;
  }
  &:hover ${BackgroundImage} {
    transform: scale(1.2, 1.2) rotate(5deg);
  }
`;

export const New = styled.span`
  position: absolute;
  top: 15px;
  left: 20px;
  color: #ffffff;
  background-color: #fe302f;
  padding: 2px 8px;
  text-transform: uppercase;
  font-size: 0.85rem;

  left: 0;
  background-color: #444444;
`;

export const Part1 = styled.div`
  position: relative;
  height: 290px;
  max-height: 290px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const IconContainer = styled.li`
  display: inline-block;
  margin-right: 4px;
`;

export const IconButton = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  color: #444444;
  text-align: center;
  box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
  transition: color 0.2s;
  &:hover {
    color: #fe302f;
  }
`;

export const Part2 = styled.div`
  h4 {
    display: inline-block;
    font-size: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export const ProductOldPrice = styled.h4`
  position: relative;
  padding: 0 7px;
  margin-right: 2px;
  opacity: 0.6;
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #444444;
    transform: translateY(-50%);
  }
`;

export const ProductPrice = styled.h4``;
