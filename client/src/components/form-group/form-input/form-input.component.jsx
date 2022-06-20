import { Form, InputGroup } from 'react-bootstrap';
import { useController } from 'react-hook-form';

import './form-input.styles.scss';

const FormInput = ({
  name,
  control,
  rules,
  defaultValue,
  label,
  id,
  children,
  ...controlProps
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Form.Group controlId={id} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control {...field} className="input" {...controlProps} />
        {children}
      </InputGroup>
    </Form.Group>
  );
};

export default FormInput;
