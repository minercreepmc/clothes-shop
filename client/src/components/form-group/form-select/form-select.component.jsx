import { Form, FormGroup } from 'react-bootstrap';

import './form-select.styles.scss';

const FormSelect = ({ children, label, name, id, ...otherProps }) => {
  return (
    <FormGroup className="mb-3">
      <Form.Label htmlFor={id}>{label}</Form.Label>

      <Form.Select className="form-select" id={id} name={name} {...otherProps}>
        {children}
      </Form.Select>
    </FormGroup>
  );
};

export default FormSelect;
