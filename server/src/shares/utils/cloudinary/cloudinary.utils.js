const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function uploadImage(image) {
  const { public_id, secure_url } = await cloudinary.uploader.upload(image, {
    public_id: Date.now(),
    resource_type: 'auto',
    folder: 'products',
  });
  const result = { public_id, secure_url };
  return result;
}

async function deleteImage(url) {
  return cloudinary.uploader.destroy(url);
}

module.exports = {
  uploadImage,
  deleteImage,
};
