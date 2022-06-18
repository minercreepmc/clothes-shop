const imagesService = require('./images.service');

async function httpUploadImage(req, res) {
  try {
    const result = await imagesService.uploadImage({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    console.log(errors);
    return res.status(400).json(errors);
  }
}

async function httpUploadMultipleImages(req, res) {
  try {
    const result = await imagesService.uploadImages({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    return res.status(400).json(errors);
  }
}

module.exports = {
  httpUploadImage,
  httpUploadMultipleImages,
};
