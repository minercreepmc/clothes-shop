const { authCheck } = require('#share/middlewares/auth.middleware');
const { Router } = require('express');

const {
  httpUpsertUser,
  httpCreateUser,
  httpGetCurrentUser,
} = require('./users.controller');

const router = Router();

router.post('/current-user', authCheck, httpGetCurrentUser);
router.post('/create', authCheck, httpCreateUser);
router.post('/upsert', authCheck, httpUpsertUser);

module.exports = router;
