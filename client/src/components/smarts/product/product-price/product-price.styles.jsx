import styled from 'styled-components';

export const ProductPriceContainer = styled.div`
  h4 {
    display: inline-block;
    font-size: 1rem;
  }
`;

export const ProductMainPrice = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  margin-right: 5px;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: line-through;
`;

export const ProductDiscountedPrice = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
