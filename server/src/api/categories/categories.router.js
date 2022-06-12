const { Router } = require('express');

const { adminCheck } = require('#share/middlewares/auth.middleware');

const {
  httpGetCategories,
  httpPostCategory,
  httpUpdateCategory,
  httpDeleteCategory,
} = require('./categories.controller');

const router = Router();

router.get('/', httpGetCategories);
router.post('/', adminCheck, httpPostCategory);
router.put('/:slug', adminCheck, httpUpdateCategory);
router.delete('/:slug', adminCheck, httpDeleteCategory);

module.exports = router;
