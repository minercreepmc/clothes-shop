const SubCategoryUseCase = require('../../domain/sub-category.usecase');

async function httpGetSubCategories(req, res, next) {
  try {
    const categories = await SubCategoryUseCase.getSubCategoriesByQuery({
      query: req.query,
    });
    return res.status(200).json(categories);
  } catch (errors) {
    return next(errors);
  }
}

async function httpGetSubCategory(req, res, next) {
  try {
    const category = await SubCategoryUseCase.getSubCategoryByIdOrSlug({
      params: req.params,
    });
    return res.status(200).json(category);
  } catch (errors) {
    return next(errors);
  }
}

async function httpPostSubCategory(req, res, next) {
  try {
    const newCategory = await SubCategoryUseCase.createSubCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return next(errors);
  }
}

async function httpPutSubCategory(req, res, next) {
  try {
    const newCategory = await SubCategoryUseCase.updateSubCategory({
      body: req.body,
      params: req.params,
    });

    return res.status(200).json(newCategory);
  } catch (error) {
    return next(errors);
  }
}

async function httpDeleteSubCategory(req, res, next) {
  try {
    const deletedCategory = await SubCategoryUseCase.deleteSubCategory({
      params: req.params,
    });
    return res.status(200).json(deletedCategory);
  } catch (errors) {
    return next(errors);
  }
}

module.exports = {
  httpGetSubCategories,
  httpGetSubCategory,
  httpPostSubCategory,
  httpPutSubCategory,
  httpDeleteSubCategory,
};
