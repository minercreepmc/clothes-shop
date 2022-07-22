import { NextFunction, Request, Response } from 'express';
import * as CategoryUseCase from 'services/category-service/domain/category.usecase';

export async function httpGetCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await CategoryUseCase.getAllCategories();
    return res.status(200).json(categories);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpGetCategory(req: Request, res: Response, next: NextFunction) {
  const slug = req.params.slug;
  const filter = { _id: slug, slug };
  try {
    const category = await CategoryUseCase.getCategory(filter, req.query);
    return res.status(200).json(category);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpPostCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const newCategory = await CategoryUseCase.createCategoryByName(req.body);
    return res.status(201).json(newCategory);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpPutCategory(req: Request, res: Response, next: NextFunction) {
  const slug = req.params.slug;
  const filter = { _id: slug, slug };

  try {
    const newCategory = await CategoryUseCase.updateCategory(filter, req.body);

    return res.status(200).json(newCategory);
  } catch (errors) {
    return next(errors);
  }
}

export async function httpDeleteCategory(req: Request, res: Response, next: NextFunction) {
  const slug = req.params.slug;
  const filter = { _id: slug, slug };

  try {
    const deletedCategory = await CategoryUseCase.deleteCategory(filter);
    return res.status(200).json(deletedCategory);
  } catch (errors) {
    return next(errors);
  }
}

