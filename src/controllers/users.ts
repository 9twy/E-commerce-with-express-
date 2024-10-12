import { Request,Response } from "express";
import { AddressShema, UpdateUserSchema } from "../schema/users";
import { NOtFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { Address, User } from "@prisma/client";
import { prismaClinet } from "..";
import { BadRequestException } from "../exceptions/bad-request";
export const addAddress=async (req:Request,res:Response)=>
{
    AddressShema.parse(req.body)
    
    
    
   
    
    
    const address =await prismaClinet.address.create({
        data:{
           ...req.body,
           userId:req.user.id
        }
    })
    
    res.json(address);
    
    
    
    
    

}
export const deleteAddress=async (req:Request,res:Response)=>
    {
        try{
            await prismaClinet.address.delete({where:{id:+req.params.id}})
            res.json({success:true})
        }catch(error){
            throw new NOtFoundException("not found !!",ErrorCode.USER_NOT_FOUND);

        }
    res.json("deleted successfully")
    }

    export const listAddress=async (req:Request,res:Response)=>
        {
            const addresses=await prismaClinet.address.findMany({where:{
                userId:req.user.id
            }})
            res.json(addresses)
        
        }
        
 export const updateUser = async(req:Request,res:Response)=>{
    
    
    const validatedDate=UpdateUserSchema.parse(req.body);
    let shippingAddress:Address;
    let billingAddress:Address;
    if (validatedDate.defaultShippingAddress){
    try{

        shippingAddress=await prismaClinet.address.findFirstOrThrow({
            where:{
                id : validatedDate.defaultShippingAddress 
            }
        })
        
    }catch(error){
        throw new NOtFoundException("Address Not Found !!",ErrorCode.Address_Not_Found)
    }
    console.log();
    
    if (shippingAddress.userId!=req.user.id){
        
        throw new BadRequestException("Address dose not belong to user",ErrorCode.Address_Not_belogn)
    }
}
    
    if (validatedDate.defaultBillingAddress){
        try{
    
            billingAddress=await prismaClinet.address.findFirstOrThrow({
                where:{
                    id : validatedDate.defaultBillingAddress 
                }
            })
        }catch(error){
            throw new NOtFoundException("Address Not Found !!",ErrorCode.Address_Not_Found)
        }
        if (billingAddress.userId!=req.user){
            throw new BadRequestException("Address dose not belong to user",ErrorCode.Address_Not_belogn)
        }
    }

        const updateUser=await prismaClinet.user.update({
            where:{
                id:req.user.id
            },
            data:validatedDate 

            
        })
        res.json(updateUser)
 }