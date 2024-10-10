import { Router } from "express";
import { errorHandler } from "../error-handler";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "../controllers/products";
import authMiddleware from "../middelwares/auth";
import adminMiddleware from "../middelwares/admin";
import { list } from "postcss";
const productsRouters:Router=Router()
productsRouters.post('/',[authMiddleware,adminMiddleware],errorHandler(createProduct))
productsRouters.delete('/:id',[authMiddleware,adminMiddleware],errorHandler(deleteProduct))
productsRouters.patch('/:id',[authMiddleware,adminMiddleware],errorHandler(updateProduct))
productsRouters.get('/:id',[authMiddleware,adminMiddleware],errorHandler(getProductById))
productsRouters.get('/',[authMiddleware,adminMiddleware],errorHandler(listProducts))

export default productsRouters