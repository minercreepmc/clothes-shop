import styled from 'styled-components';
import ScrollTop from 'react-scrolltop-button';

export const ScrollTopButton = styled(ScrollTop)`
  background-color: ${(props) => props.theme.colors.white};
  z-index: 99999;
`;
