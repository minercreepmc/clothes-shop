const {
  authCheck,
  adminCheck,
} = require('#shares/middlewares/auth.middleware');
const { Router } = require('express');

const router = Router();

const {
  httpGetProduct,
  httpPostProduct,
  httpDeleteProduct,
  httpGetProducts,
  httpPutProduct,
} = require('./product.controller');

router.get('/', httpGetProducts);
router.get('/:slug', httpGetProduct);
router.post('/', authCheck, adminCheck, httpPostProduct);
router.put('/:slug', authCheck, adminCheck, httpPutProduct);
router.delete('/:slug', authCheck, adminCheck, httpDeleteProduct);

module.exports = router;
