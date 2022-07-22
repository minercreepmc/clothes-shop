import { NextFunction, Request, Response } from 'express';
import * as SubCategoryUseCase from '../../domain/sub-category.usecase';

export async function httpGetSubCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await SubCategoryUseCase.getSubCategoriesByQuery(req.query);
    return res.status(200).json(categories);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpGetSubCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const category = await SubCategoryUseCase.getSubCategoriesByParams({
      _id: req.params._id,
      slug: req.params.slug
    });
    return res.status(200).json(category);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpPostSubCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const newCategory = await SubCategoryUseCase.createSubCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return next(error);
  }
}

export async function httpPutSubCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const newCategory = await SubCategoryUseCase.updateSubCategory({ _id: req.params._id, slug: req.params.slug }, req.body);

    return res.status(200).json(newCategory);
  } catch (error) {
    return next(error);
  }
}

export async function httpDeleteSubCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const deletedCategory = await SubCategoryUseCase.deleteSubCategory({
      _id: req.params._id,
      slug: req.params.slug
    });
    return res.status(200).json(deletedCategory);
  } catch (errors) {
    return next(errors);
  }
}
