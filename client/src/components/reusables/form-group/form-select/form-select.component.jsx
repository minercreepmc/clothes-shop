import { Form, FormGroup } from 'react-bootstrap';

import './form-select.styles.scss';

const FormSelect = ({ name, children, label, id, ...otherProps }) => {
  return (
    <FormGroup controlId={id} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select name={name} className="form-select" {...otherProps}>
        {children}
      </Form.Select>
    </FormGroup>
  );
};

export default FormSelect;
