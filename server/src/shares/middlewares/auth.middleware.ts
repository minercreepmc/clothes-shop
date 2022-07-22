import { verifyToken } from 'shares/utils/firebase';
import * as UsersRepo from 'services/user-service/data-access/repositories/user.repository';
import { NextFunction, Request, Response } from 'express';

export const authCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = <string>req.headers['accessToken'];
    const fireBaseUser = await verifyToken(accessToken);
    const user = await UsersRepo.getUserByEmail(fireBaseUser.email);
    req.user = user!;

    next();
  } catch (errors) {
    res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
};

export const adminCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;

  if (user!.role !== 'admin') {
    return res
      .status(403)
      .json({ message: 'You are not authorized to access this resources' });
  }

  return next();
};
