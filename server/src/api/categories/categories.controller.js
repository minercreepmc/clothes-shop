const CategoriesService = require('./categories.service');

async function httpGetCategories(req, res) {
  try {
    const categories = await CategoriesService.getAllCategories(req.body);
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ message: 'Bad request' });
  }
}

async function httpPostCategory(req, res) {
  try {
    const newCategory = await CategoriesService.createCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpUpdateCategory(req, res) {
  try {
    const newCategory = await CategoriesService.updateCategory({
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
    const deletedCategory = await CategoriesService.deleteCategory({
      params: req.params,
    });
    return res.status(200).json(deletedCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  httpGetCategories,
  httpPostCategory,
  httpUpdateCategory,
  httpDeleteCategory,
};