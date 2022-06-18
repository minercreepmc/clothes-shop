const { Router } = require('express');
const router = Router();

const usersRouter = require('./users/users.router');
const categoriesRouter = require('./categories/categories.router');
const subCategoriesRouter = require('./sub-categories/sub-categories.router');
const productsRouter = require('./products/products.router');
const imagesRouter = require('./images/images.router');

const { authCheck } = require('#shares/middlewares/auth.middleware');

router.use('/users', authCheck, usersRouter);
router.use('/categories', categoriesRouter);
router.use('/sub-categories', subCategoriesRouter);
router.use('/products', productsRouter);
router.use('/images', authCheck, imagesRouter);

module.exports = router;
