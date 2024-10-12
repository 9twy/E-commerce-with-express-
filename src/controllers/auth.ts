import { NextFunction, Request,Response } from "express"
import { prismaClinet } from "..";
import {hashSync,compareSync} from 'bcrypt';
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEnity } from "../exceptions/validation";
import { signupSchema } from "../schema/users";
import { Prisma } from "@prisma/client";
import { json } from "stream/consumers";
import { NOtFoundException } from "../exceptions/not-found";
export const signup= async (req:Request,res:Response,next:NextFunction)=>{
    signupSchema.parse(req.body)
    const {email,password,name}=req.body;
    let user =await prismaClinet.user.findFirst({where:{email}})
    if(user){
        new BadRequestException("User already exist!!",ErrorCode.USER_ALREADY_EXIST)
    }
    if (!user){
    user=await prismaClinet.user.create({
        data:{
            name,
            email,
            password:hashSync(password,10)
        }
    })
    res.json(user);}
    

}

export const login= async (req:Request,res:Response)=>{
    const {email,password}=req.body;
    // checking the user if exist 
    let user = await prismaClinet.user.findFirst({where:{email}})
    if (!user){
       throw new NOtFoundException("User not found",ErrorCode.USER_NOT_FOUND)

    }
    // user= await prismaClinet.user.create({
    //     data:{
    //         email,
    //         password:hashSync(password,10)
    //     }
    // })
    if (!compareSync(password,user.password)){
        throw new BadRequestException("incorrect Password",ErrorCode.INCORRECT_PASSWORD)
    }
    const token = jwt.sign({
        userId:user.id,
    },JWT_SECRET)
    res.json({user,token})


}

// me --> return logged in user

export const me= async (req:Request,res:Response)=>{
    console.log("is here ");
    
    res.json(req.user) 
    
}
