const CategoryUseCase = require('../../domain/category.usecase');

async function httpGetCategories(req, res) {
  try {
    const categories = await CategoryUseCase.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpGetCategory(req, res) {
  try {
    const category = await CategoryUseCase.getCategoryByIdOrSlug({
      params: req.params,
      query: req.query,
    });
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}

async function httpPostCategory(req, res) {
  try {
    const newCategory = await CategoryUseCase.createCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpPutCategory(req, res) {
  try {
    const newCategory = await CategoryUseCase.updateCategory({
      body: req.body,
      params: req.params,
    });

    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpDeleteCategory(req, res) {
  try {
    const deletedCategory = await CategoryUseCase.deleteCategory({
      params: req.params,
    });
    return res.status(200).json(deletedCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  httpGetCategories,
  httpGetCategory,
  httpPostCategory,
  httpPutCategory,
  httpDeleteCategory,
};
