const SubCategoriesService = require('./sub-categories.service');

async function httpGetSubCategories(req, res) {
  try {
    const categories = await SubCategoriesService.getAllSubCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpGetSubCategory(req, res) {
  try {
    const category = await SubCategoriesService.getSubCategoryBySlug({
      params: req.params,
    });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpPostSubCategory(req, res) {
  try {
    const newCategory = await SubCategoriesService.createSubCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpPutSubCategory(req, res) {
  try {
    const newCategory = await SubCategoriesService.updateSubCategory({
      body: req.body,
      params: req.params,
    });

    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

async function httpDeleteSubCategory(req, res) {
  try {
    const deletedCategory = await SubCategoriesService.deleteSubCategory({
      params: req.params,
    });
    return res.status(200).json(deletedCategory);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  httpGetSubCategories,
  httpGetSubCategory,
  httpPostSubCategory,
  httpPutSubCategory,
  httpDeleteSubCategory,
};
