import axios from 'axios';
import { IMAGES_UPLOAD_ENDPOINT } from './images.constant';

async function httpGetImage({ imageId, query }) {
  try {
    const res = await axios.get(`${IMAGES_UPLOAD_ENDPOINT}/${imageId}`, {
      params: query,
    });
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

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
    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

async function httpDeleteImages({ imagesId, accessToken }) {
  try {
    const res = await axios.post(
      `${IMAGES_UPLOAD_ENDPOINT}/delete`,
      { imagesId },
      { headers: { accessToken } },
    );

    return res.data;
  } catch (errors) {
    return errors.response.data;
  }
}

export { httpGetImage, httpUploadImage, httpUploadImages, httpDeleteImages };
