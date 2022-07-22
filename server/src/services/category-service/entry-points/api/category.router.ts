import { Router } from 'express';

import { authCheck, adminCheck } from 'shares/middlewares/auth.middleware';

import {
  httpGetCategories,
  httpGetCategory,
  httpPostCategory,
  httpPutCategory,
  httpDeleteCategory,
} from './category.controller';

const router = Router();

router.get('/', httpGetCategories);
router.get('/:slug', httpGetCategory);
router.post('/', authCheck, adminCheck, httpPostCategory);
router.put('/:slug', authCheck, adminCheck, httpPutCategory);
router.delete('/:slug', authCheck, adminCheck, httpDeleteCategory);

export default router;
