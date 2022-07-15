const ImageUseCase = require('../../domain/image.usecase');

async function httpGetImage(req, res) {
  try {
    const url = await ImageUseCase.getImage({
      params: req.params,
      query: req.query,
    });
    return res.status(200).json(url);
  } catch (errors) {
    return next(errors);
  }
}

async function httpUploadImage(req, res) {
  try {
    const result = await ImageUseCase.uploadImage({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    return next(errors);
  }
}

async function httpUploadMultipleImages(req, res) {
  try {
    const result = await ImageUseCase.uploadImages({ body: req.body });
    return res.status(201).json(result);
  } catch (errors) {
    return next(errors);
  }
}

async function httpDeleteImages(req, res) {
  try {
    const result = await ImageUseCase.deleteImages({ body: req.body });
    return res.status(200).json(result);
  } catch (errors) {
    return next(errors);
  }
}

module.exports = {
  httpGetImage,
  httpUploadImage,
  httpUploadMultipleImages,
  httpDeleteImages,
};
