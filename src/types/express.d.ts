import { Request } from 'express';
declare global {
  namespace Express {
    interface Request {
      user?: any;  // Adjust the type here if you know the exact type of 'user'
    }
  }
}