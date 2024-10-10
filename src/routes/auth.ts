import {Router} from 'express';
import { login, me, signup } from '../controllers/auth';
import { errorHandler } from '../error-handler';
import { error } from 'console';
import authMiddleware from '../middelwares/auth';
const authRouter:Router=Router();
authRouter.post('/signup',errorHandler( signup));
authRouter.post('/login',errorHandler(login));
authRouter.get('/me',authMiddleware,errorHandler(me))
export default authRouter;