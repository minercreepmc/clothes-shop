import { Form, FormGroup } from 'react-bootstrap';
import { useController } from 'react-hook-form';

import './form-select.styles.scss';

const FormSelect = ({
  name,
  control,
  rules,
  defaultValue,
  children,
  label,
  id,
  ...otherProps
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <FormGroup controlId={id} className="mb-3">
      <Form.Label>{label}</Form.Label>

      <Form.Select
        {...field}
        name={name}
        className="form-select"
        {...otherProps}
      >
        {children}
      </Form.Select>
    </FormGroup>
  );
};

export default FormSelect;
