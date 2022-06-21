import axios from 'axios';
import { IMAGES_UPLOAD_ENDPOINT } from './images.constant';

async function httpUploadImage({ image, accessToken }) {
  try {
    const res = await axios.post(
      `${IMAGES_UPLOAD_ENDPOINT}/upload`,
      { image },
      { headers: { accessToken } },
    );
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

async function httpUploadImages({ images, accessToken }) {
  try {
    const res = await axios.post(
      `${IMAGES_UPLOAD_ENDPOINT}/upload/multiple`,
      { images },
      { headers: { accessToken } },
    );
    console.log(res);
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

export { httpUploadImage, httpUploadImages };
