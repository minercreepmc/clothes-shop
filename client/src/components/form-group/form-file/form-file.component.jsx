import { Form } from 'react-bootstrap';
import Resizer from 'react-image-file-resizer';

import './form-file.styles.scss';

const FormFile = ({ product, setProduct }) => {
  const fileUploadAndResize = async (e) => {
    const files = Array.from(e.target.files);

    const resizedImages = [];
    const resizePromises = files.map((file) =>
      Resizer.imageFileResizer(
        file,
        720,
        720,
        'WEBP',
        100,
        0,
        async (uri) => {
          resizedImages.push(uri);
        },
        'base64',
      ),
    );

    await Promise.all(resizePromises);

    setProduct({ ...product, images: resizedImages });
  };

  return (
    <Form.Group>
      <Form.Label>Multiple files input example</Form.Label>
      <Form.Control
        className="form-file-dark"
        onChange={fileUploadAndResize}
        type="file"
        multiple
        accept="images/*"
      />
    </Form.Group>
  );
};

export default FormFile;
