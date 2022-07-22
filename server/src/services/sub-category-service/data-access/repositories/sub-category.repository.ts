import SubCategoryModel from './sub-category.model';
import { ISubCategory, ISubCategoryFilter, ISubCategoryParams } from './sub-category.types';

export async function getAllSubCategories() {
  return SubCategoryModel.find();
}

export async function getSubCategories(filter: ISubCategoryFilter) {
  return SubCategoryModel.find(filter);
}

export async function getSubCategory(params: ISubCategoryParams) {
  return SubCategoryModel.findOne(params);
}

export async function createSubCategory(data: ISubCategory) {
  return SubCategoryModel.create(data);
}

export async function updateSubCategory(params: ISubCategoryParams, data: ISubCategory) {
  const { slug } = params;
  return SubCategoryModel.findOneAndUpdate(
    { slug },
    { $set: { ...data } },
    { new: true, runValidators: true },
  );
}

export async function deleteSubCategory(params: ISubCategoryParams) {
  const { slug } = params;
  return SubCategoryModel.findOneAndDelete({ slug });
}

