import { adminCheck } from 'shares/middlewares/auth.middleware';
import { Router } from 'express';

import {
  httpUpsertUser,
  httpCreateUser,
  httpGetCurrentUser,
} from './user.controller';

const router = Router();

router.post('/current-user', httpGetCurrentUser);
router.post('/current-admin', adminCheck, httpGetCurrentUser);
router.post('/create', httpCreateUser);
router.post('/upsert', httpUpsertUser);

export default router;
