const { Router } = require('express');

const {
  authCheck,
  adminCheck,
} = require('#shares/middlewares/auth.middleware');

const {
  httpGetCategories,
  httpPostCategory,
  httpUpdateCategory,
  httpDeleteCategory,
} = require('./categories.controller');

const router = Router();

router.get('/', httpGetCategories);
router.post('/', authCheck, adminCheck, httpPostCategory);
router.put('/:slug', authCheck, adminCheck, httpUpdateCategory);
router.delete('/:slug', authCheck, adminCheck, httpDeleteCategory);

module.exports = router;
