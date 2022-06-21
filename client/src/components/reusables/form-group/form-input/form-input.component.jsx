import { Form, InputGroup } from 'react-bootstrap';

import './form-input.styles.scss';

const FormInput = ({ name, label, id, children, ...controlProps }) => {
  return (
    <Form.Group controlId={id} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control name={name} className="input" {...controlProps} />
        {children}
      </InputGroup>
    </Form.Group>
  );
};

export default FormInput;
