import { Form } from 'react-bootstrap';
import Resizer from 'react-image-file-resizer';
import { resizeImages } from 'shares/utils/react-image-file-resizer/react-image-file-resizer.utils';

import './form-images.styles.scss';

const FormImages = ({ setValue, label, name, id, defaultValue }) => {
  const handleChange = (e) => {
    setValue('images', e.target.files);
  };

  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        className="form-images-dark"
        type="file"
        multiple
        accept="images/*"
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default FormImages;
