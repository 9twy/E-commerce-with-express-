import { Router } from "express";
import authMiddleware from "../middelwares/auth";
import adminMiddleware from "../middelwares/admin";
import { errorHandler } from "../error-handler";
import { addAddress, deleteAddress, listAddress, updateUser } from "../controllers/users";
import { updateProduct } from "../controllers/products";
const usersRouters:Router=Router()
usersRouters.post('/address',[authMiddleware],errorHandler(addAddress))
usersRouters.delete('/address:id',[authMiddleware],errorHandler(deleteAddress))
usersRouters.get('/address',[authMiddleware],errorHandler(listAddress))
usersRouters.put('/',[authMiddleware],errorHandler(updateUser))
export default usersRouters