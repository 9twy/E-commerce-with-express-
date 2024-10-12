import { Router } from "express";
import authRouter from "./auth";
import productsRouters from "./products";
import usersRouters from "./users";
const rootRouter:Router =Router()
rootRouter.use('/auth',authRouter)
rootRouter.use('/products',productsRouters)
rootRouter.use('/users',usersRouters)
export default rootRouter;