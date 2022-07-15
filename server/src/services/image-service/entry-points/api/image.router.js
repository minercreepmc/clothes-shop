const { Router } = require('express');
const router = Router();

const { adminCheck } = require('#shares/middlewares/auth.middleware');

const {
  httpUploadImage,
  httpUploadMultipleImages,
  httpDeleteImages,
  httpGetImage,
} = require('./image.controller');

router.post('/upload', adminCheck, httpUploadImage);
router.post('/upload/multiple', adminCheck, httpUploadMultipleImages);
router.post('/delete', httpDeleteImages);
router.get('*/:imageId', httpGetImage);

module.exports = router;
