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

async function deleteImages({ body }) {
  const { imagesId } = body;

  const deleteMultipleImages = imagesId.map((id) => Cloudinary.deleteImage(id));

  return Promise.all(deleteMultipleImages);
}

module.exports = { uploadImage, uploadImages, deleteImages };
