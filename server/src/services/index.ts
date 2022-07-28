import { Router } from 'express';
const router = Router();

import { authCheck } from 'shares/middlewares/auth.middleware';

import categoryRouter from './category-service/entry-points/api/category.router';
import userRouter from './user-service/entry-points/api/user.router';
import subCategoryRouter from './sub-category-service/entry-points/api/sub-category.router';
import productRouter from './product-service/entry-points/api/product.router';
// import imageRouter from './image-service/entry-points/api/image.router';
// import contactRouter from './contact-service/entry-points/api/contact.router';
//
// import { authCheck } from 'shares/middlewares/auth.middleware';
// import {
//   returnError,
//   logError,
// } from 'shares/middlewares/api-error-handler.middleware';
//
router.use('/categories', categoryRouter);
router.use('/users', authCheck, userRouter);
router.use('/sub-categories', subCategoryRouter);
router.use('/products', productRouter);
// router.use('/images', imageRouter);
// router.use('/contact', contactRouter);
//
// router.use(logError);
// router.use(returnError);

export default router;
