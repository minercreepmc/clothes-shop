import { Form } from 'react-bootstrap';

const FormGroup = ({ label, ...controlProps }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...controlProps} />
    </Form.Group>
  );
};

export default FormGroup;
