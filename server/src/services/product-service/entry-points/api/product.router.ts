import { authCheck, adminCheck } from 'shares/middlewares/auth.middleware';
import { Router } from 'express';

const router = Router();

import {
  httpGetProduct,
  httpPostProduct,
  httpDeleteProduct,
  httpGetProducts,
  httpPutProduct,
} from './product.controller';

router.get('/', httpGetProducts);
router.get('/:param', httpGetProduct);
router.post('/', authCheck, adminCheck, httpPostProduct);
router.put('/:slug', authCheck, adminCheck, httpPutProduct);
router.delete('/:slug', authCheck, adminCheck, httpDeleteProduct);

export default router;
