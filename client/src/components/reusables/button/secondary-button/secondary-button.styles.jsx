import styled from 'styled-components';

import { Button } from 'react-bootstrap';

const buttonColor = '#f4623a';

export const SecondaryButton = styled(Button)`
  padding: 1.25rem 2.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;
  background-color: ${buttonColor};
  &:hover {
    background-color: #9f2d11;
  }
`;
