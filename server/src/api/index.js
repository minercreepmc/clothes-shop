const { Router } = require('express');

const usersRouter = require('./users/users.router');
const categoriesRouter = require('./categories/categories.router');
const { authCheck } = require('#shares/middlewares/auth.middleware');

const router = Router();

router.use('/users', authCheck, usersRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
