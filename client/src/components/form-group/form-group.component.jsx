import { Form, InputGroup } from 'react-bootstrap';

const FormGroup = ({ label, children, ...controlProps }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control {...controlProps} />
        {children}
      </InputGroup>
    </Form.Group>
  );
};

export default FormGroup;
