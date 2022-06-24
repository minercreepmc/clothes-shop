const { adminCheck } = require('#shares/middlewares/auth.middleware');
const { Router } = require('express');

const {
  httpUpsertUser,
  httpCreateUser,
  httpGetCurrentUser,
} = require('./user.controller');

const router = Router();

router.post('/current-user', httpGetCurrentUser);
router.post('/current-admin', adminCheck, httpGetCurrentUser);
router.post('/create', httpCreateUser);
router.post('/upsert', httpUpsertUser);

module.exports = router;
