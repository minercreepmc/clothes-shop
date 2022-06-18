const { Router } = require('express');

const router = Router();

router.post('/images/upload', httpUploadImages);

module.exports = router; 
