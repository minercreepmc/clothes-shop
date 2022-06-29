const ImageUseCase = require('../../domain/image.usecase');

async function httpUploadImage(req, res) {
  try {
    const result = await ImageUseCase.uploadImage({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    return res.status(400).json(errors);
  }
}

async function httpUploadMultipleImages(req, res) {
  try {
    const result = await ImageUseCase.uploadImages({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    return res.status(400).json(errors);
  }
}

async function httpDeleteImages(req, res) {
  try {
    console.log(req.body);
    const result = await ImageUseCase.deleteImages({ body: req.body });
    return res.status(200).json(result);
  } catch (errors) {
    console.log(errors);
    return res.status(400).json(errors);
  }
}

module.exports = {
  httpUploadImage,
  httpUploadMultipleImages,
  httpDeleteImages,
};
