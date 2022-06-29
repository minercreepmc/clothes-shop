const { Router } = require('express');
const router = Router();

const { adminCheck } = require('#shares/middlewares/auth.middleware');

const {
  httpUploadImage,
  httpUploadMultipleImages,
  httpDeleteImages,
} = require('./image.controller');

router.post('/upload', adminCheck, httpUploadImage);
router.post('/upload/multiple', adminCheck, httpUploadMultipleImages);
router.post('/delete', httpDeleteImages);

module.exports = router;
