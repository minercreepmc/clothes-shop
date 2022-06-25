import { Form } from 'react-bootstrap';

import './form-images.styles.scss';

const FormImages = ({ label, name, id, ...controlProps }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        className="form-images-dark"
        type="file"
        multiple
        accept="images/*"
        {...controlProps}
      />
    </Form.Group>
  );
};

export default FormImages;
