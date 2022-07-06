const { Router } = require('express');

const { httpSendEmail } = require('./contact.controller');

const router = Router();

router.post('/', httpSendEmail);

module.exports = router;
