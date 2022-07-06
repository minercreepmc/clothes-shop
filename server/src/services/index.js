const { Router } = require('express');
const router = Router();

const userRouter = require('./user-service/entry-points/api/user.router');
const categoryRouter = require('./category-service/entry-points/api/category.router');
const subCategoryRouter = require('./sub-category-service/entry-points/api/sub-category.router');
const productRouter = require('./product-service/entry-points/api/product.router');
const imageRouter = require('./image-service/entry-points/api/image.router');
const contactRouter = require('./contact-service/entry-points/api/contact.router');

const { authCheck } = require('#shares/middlewares/auth.middleware');

router.use('/users', authCheck, userRouter);
router.use('/categories', categoryRouter);
router.use('/sub-categories', subCategoryRouter);
router.use('/products', productRouter);
router.use('/images', authCheck, imageRouter);
router.use('/contact', contactRouter);

module.exports = router;
