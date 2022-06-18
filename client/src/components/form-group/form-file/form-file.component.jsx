import { Form } from 'react-bootstrap';

import './form-file.styles.scss';
const FormFile = () => {
  return (
    <Form.Group>
      <Form.Label>Multiple files input example</Form.Label>
      <Form.Control type="file" multiple className="form-file-dark" />
    </Form.Group>
  );
};

export default FormFile;
