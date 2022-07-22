import {
  authCheck,
  adminCheck,
} from 'shares/middlewares/auth.middleware';
import { Router } from 'express';

import {
  httpGetSubCategories,
  httpGetSubCategory,
  httpPostSubCategory,
  httpPutSubCategory,
  httpDeleteSubCategory,
} from './sub-category.controller';

const router = Router();

router.get('/', httpGetSubCategories);
router.get('/:param', httpGetSubCategory);
router.post('/', authCheck, adminCheck, httpPostSubCategory);
router.put('/:slug', authCheck, adminCheck, httpPutSubCategory);
router.delete('/:slug', authCheck, adminCheck, httpDeleteSubCategory);

export default router;
