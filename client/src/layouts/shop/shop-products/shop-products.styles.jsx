import styled from 'styled-components';

import { Row } from 'react-bootstrap';

export const ShopProductsWrap = styled(Row)`
  transition: 0.6s;
  [class*="col"] {
          transition: 0.6s;
  }
`;
