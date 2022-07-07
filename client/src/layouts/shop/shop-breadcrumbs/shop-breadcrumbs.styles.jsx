import styled from 'styled-components';

import LazyImage from 'components/reusables/lazy-image/lazy-image.component';
import shopBackground from 'assets/img/shop/shop-bg.jpg';

export const BreadcrumbBackground = styled(LazyImage)`
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`;

export const BreadcrumbContainer = styled.nav`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${shopBackground});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: -1;
    filter: opacity(0.2);
  }
`;

export const BreadcrumbTitle = styled.h1`
  font-size: 48px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
`;

export const BreadcrumbList = styled.ol`
  font-size: 1.5rem;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  visibility: visible;
  color: #777777;

  a {
    color: #999999;
  }
`;
