const CategoryUseCase = require('../../domain/category.usecase');

async function httpGetCategories(req, res, next) {
  try {
    const categories = await CategoryUseCase.getAllCategories();
    return res.status(200).json(categories);
  } catch (errors) {
    return next;
  }
}

async function httpGetCategory(req, res, next) {
  try {
    const category = await CategoryUseCase.getCategoryByIdOrSlug({
      params: req.params,
      query: req.query,
    });
    return res.status(200).json(category);
  } catch (errors) {
    return next(errors);
  }
}

async function httpPostCategory(req, res, next) {
  try {
    const newCategory = await CategoryUseCase.createCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (errors) {
    return next(errors);
  }
}

async function httpPutCategory(req, res, next) {
  try {
    const newCategory = await CategoryUseCase.updateCategory({
      body: req.body,
      params: req.params,
    });

    return res.status(200).json(newCategory);
  } catch (errors) {
    return next(errors);
  }
}

async function httpDeleteCategory(req, res, next) {
  try {
    const deletedCategory = await CategoryUseCase.deleteCategory({
      params: req.params,
    });
    return res.status(200).json(deletedCategory);
  } catch (errors) {
    return next(errors);
  }
}

module.exports = {
  httpGetCategories,
  httpGetCategory,
  httpPostCategory,
  httpPutCategory,
  httpDeleteCategory,
};
