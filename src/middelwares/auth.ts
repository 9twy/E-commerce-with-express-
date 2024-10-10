import { NextFunction,Request,Response } from "express";
import { UnauthorizedExceptionn } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { prismaClinet } from "..";
import { log } from "console";

const authMiddleware=async(req:Request,res:Response,next:NextFunction)=>{
    const token =req.headers.authorization
   
    
    // extracting the token from header 
    // if token is not present , throw an error of unauthorized
    // if the tokenn is present , berifu that token and extract the payload
    // get the user from the payload
    // to attach the user to the current request object
    try{
    if (!token){
        next(new UnauthorizedExceptionn("not authoraized",ErrorCode.UNAUTHORIZED_TOKEN))
    }
    else{
    const payload=jwt.verify(token,JWT_SECRET) as any
    console.log(payload.userId);
    
    const user =await prismaClinet.user.findFirst({where:{id:payload.userId}})
    
    if (!user){
        next(new UnauthorizedExceptionn("Unauthorized",ErrorCode.UNAUTHORIZED_TOKEN))
    }
    
    req.user=user;
    next();
    console.log(user);
    
    
    

}}
catch(error){
    next(new UnauthorizedExceptionn("Unauthorized",ErrorCode.UNAUTHORIZED_TOKEN))
}
}
export default authMiddleware