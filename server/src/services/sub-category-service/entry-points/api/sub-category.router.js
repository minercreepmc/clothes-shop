const {
  authCheck,
  adminCheck,
} = require('#shares/middlewares/auth.middleware');
const { Router } = require('express');

const {
  httpGetSubCategories,
  httpGetSubCategory,
  httpPostSubCategory,
  httpPutSubCategory,
  httpDeleteSubCategory,
} = require('./sub-category.controller');

const router = Router();

router.get('/', httpGetSubCategories);
router.get('/:slug', httpGetSubCategory);
router.post('/', authCheck, adminCheck, httpPostSubCategory);
router.put('/:slug', authCheck, adminCheck, httpPutSubCategory);
router.delete('/:slug', authCheck, adminCheck, httpDeleteSubCategory);

module.exports = router;
