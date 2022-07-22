import { IUser } from 'services/user-service/data-access/repositories/user.types';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
