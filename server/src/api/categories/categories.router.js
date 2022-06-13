const { Router } = require('express');

const {
  authCheck,
  adminCheck,
} = require('#shares/middlewares/auth.middleware');

const {
  httpGetCategories,
  httpGetCategory,
  httpPostCategory,
  httpPutCategory,
  httpDeleteCategory,
} = require('./categories.controller');

const router = Router();

router.get('/', httpGetCategories);
router.get('/:slug', httpGetCategory);
router.post('/', authCheck, adminCheck, httpPostCategory);
router.put('/:slug', authCheck, adminCheck, httpPutCategory);
router.delete('/:slug', authCheck, adminCheck, httpDeleteCategory);

module.exports = router;
