const { Router } = require('express');
const router = Router();

const { adminCheck } = require('#shares/middlewares/auth.middleware');

const {
  httpUploadImage,
  httpUploadMultipleImages,
} = require('./images.controller');

router.post('/upload', adminCheck, httpUploadImage);
router.post('/upload/multiple', adminCheck, httpUploadMultipleImages);

module.exports = router;
