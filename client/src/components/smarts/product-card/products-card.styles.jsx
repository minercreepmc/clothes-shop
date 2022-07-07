import styled from 'styled-components';
import LazyImage from 'components/reusables/lazy-image/lazy-image.component';

export const IconButton = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;
  transform: rotate(180deg);
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: #b71c1c;
    color: #fff;
  }
  &:nth-last-of-type(4) {
    transition-delay: 0.2s;
  }

  &:nth-last-of-type(3) {
    transition-delay: 0.15s;
  }

  &:nth-last-of-type(2) {
    transition-delay: 0.1s;
  }

  &:nth-last-of-type(1) {
    transition-delay: 0.05s;
  }
`;
export const IconButtonGroup = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1em;
  list-style: none;
  padding: 0;
  transition: bottom 0.5s, opacity 0.5s;
`;

export const ProductImage = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: all 0.3s !important;
`;

export const SingleProduct = styled.div`
  margin-bottom: 26px;
  height: 350px;

  &:hover ${IconButtonGroup} {
    opacity: 1;
  }
  &:hover ${IconButton} {
    transform: translateY(-60px);
  }
  &:hover ${ProductImage} {
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

export const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    display: inline-block;
    font-size: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  font-weight: 300;
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

export const ProductPrice = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;
