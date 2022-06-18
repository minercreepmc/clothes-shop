import { Form, InputGroup } from 'react-bootstrap';

import './form-input.styles.scss';

const FormGroup = ({ label, id, children, ...controlProps }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <InputGroup>
        <Form.Control id={id} className="input" {...controlProps} />
        {children}
      </InputGroup>
    </Form.Group>
  );
};

export default FormGroup;
