import styled from 'styled-components';

export const CategoryCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  opacity: 0;
  color: #fff;
  background: rgba(244, 98, 58, 0.9);
  transition: opacity 0.25s ease;
  text-align: center;
  cursor: pointer;
`;

export const Category = styled.a`
  position: relative;
  display: block;

  &:hover ${CategoryCaption} {
    opacity: 1;
  }
`;

export const CategoryName = styled.div`
  font-size: 1.2rem;
`;
