const Cloudinary = require('#shares/utils/cloudinary/cloudinary.utils');

async function uploadImage(data) {
  const { body } = data;
  const { image } = body;

  return Cloudinary.uploadImage(image);
}

async function uploadImages(data) {
  const { body } = data;
  const { images } = body;

  const uploadMultipleImages = images.map((image) =>
    Cloudinary.uploadImage(image),
  );

  return Promise.all(uploadMultipleImages);
}

module.exports = { uploadImage, uploadImages };
