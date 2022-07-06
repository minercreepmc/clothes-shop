import styled from 'styled-components';
import { Form, FloatingLabel } from 'react-bootstrap';

export const FormLabel = styled(Form.Label)``;

export const FormFloating = styled(FloatingLabel)`
  position: relative;

  ${FormLabel} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;

export const FormControl = styled(Form.Control)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
`;
