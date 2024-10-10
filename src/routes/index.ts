import { Router } from "express";
import authRouter from "./auth";
import productsRouters from "./products";
const rootRouter:Router =Router()
rootRouter.use('/auth',authRouter)
rootRouter.use('/products',productsRouters)
export default rootRouter;