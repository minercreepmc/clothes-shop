const { Router } = require('express');

const usersRouter = require('./users/users.router');
const categoriesRouter = require('./categories/categories.router');
const { authCheck } = require('#share/middlewares/auth.middleware');

const router = Router();

router.use('/users', authCheck, usersRouter);
router.use('/categories', authCheck, categoriesRouter);

module.exports = router;
