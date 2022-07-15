const Cloudinary = require('#shares/utils/cloudinary/cloudinary.utils');

async function getImage({ params, query, folder = 'products' }) {
  const { imageId } = params;
  const { height, width } = query;
  const transformation = [{ height, width }];

  const imageUrl = await Cloudinary.getImage(
    `${folder}/${imageId}.webp`,
    transformation,
  );

  return imageUrl;
}

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

module.exports = { getImage, uploadImage, uploadImages, deleteImages };
