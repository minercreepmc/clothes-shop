import { NextFunction, Request, Response } from 'express';
import * as UserUseCase from '../../domain/user.usecase';

export const httpCreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await UserUseCase.createUser(req.user!);
    return res.status(201).json(newUser);
  } catch (errors) {
    return next(errors);
  }
};

export const httpUpsertUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserUseCase.createAndUpdateUser(req.user!);
    return res.status(200).json(user);
  } catch (errors) {
    return next(errors);
  }
};

export const httpGetCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserUseCase.getCurrentUserByEmail(req.user!.email);
    return res.status(200).json(user);
  } catch (errors) {
    return next(errors);
  }
};
