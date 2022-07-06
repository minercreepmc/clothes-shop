import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FormControl = styled(Form.Control)`
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.white};
  &:autofill {
    background-color: transparent;
  }
  &:focus {
    color ${(props) => props.theme.colors.white};
    background-color: transparent;
    border-color: ${props => props.theme.colors.orange};
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(244, 98, 58, 0.25);
  }
  &:disabled {
    background-color: #232627 !important;
  }
  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }
`;
