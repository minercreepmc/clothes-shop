import CategoryModel from './category.model';
import { ICategory, ICategoryFilter } from './category.types';

export async function getCategories() {
  return CategoryModel.find();
}

export async function getCategory(filters: ICategoryFilter) {
  return CategoryModel.findOne(filters);
}

export async function getCategoryWithSubCategories(filters: ICategoryFilter) {
  return CategoryModel.findOne(filters).populate('subcategories');
}

export async function getCategoryWithProducts(filters: ICategoryFilter) {
  return CategoryModel.findOne(filters).populate('products');
}

export async function createCategory(category: ICategory) {
  return CategoryModel.create(category);
}

export async function updateCategory(filters: ICategoryFilter, category: ICategory) {
  const { slug } = filters;
  return CategoryModel.findOneAndUpdate(
    { slug },
    { $set: category },
    { new: true, runValidators: true }
  );
}

export async function deleteCategory(filters: ICategoryFilter) {
  const { slug } = filters;
  return CategoryModel.findOneAndDelete({ slug });
}
