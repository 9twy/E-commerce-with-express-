import { NextFunction,Request,Response } from "express";
import { UnauthorizedExceptionn } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { prismaClinet } from "..";
import { log } from "console";

const adminMiddleware=async(req:Request,res:Response,next:NextFunction)=>{
    const user=req.user
    if (user.role=="ADMIN"){
        next();
    }
    else{
        next(new UnauthorizedExceptionn("Unauthorized",ErrorCode.UNAUTHORIZED_TOKEN))
    }
}
   
export default adminMiddleware