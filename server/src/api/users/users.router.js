const { Router } = require('express');

const {
  httpUpsertUser,
  httpCreateUser,
  httpGetCurrentUser,
} = require('./users.controller');

const router = Router();

router.post('/current-user', httpGetCurrentUser);
router.post('/create', httpCreateUser);
router.post('/upsert', httpUpsertUser);

module.exports = router;
