import { NextFunction,Response,Request } from "express"
import { ErrorCode, HttpException } from "./exceptions/root";
import { InternalException } from "./exceptions/internal-exceptipn";
import { ZodError } from "zod";
import { BadRequestException } from "./exceptions/bad-request";

export const errorHandler=(method:Function)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            await method(req,res,next);
        }
        catch(error:any){
            let exception:HttpException;
            if (error instanceof HttpException){
                exception=error;
            }
            else{
                if (error instanceof ZodError){
                    exception= new BadRequestException("unprocessable entity!",ErrorCode.UNPROCESSABLEENITY);
                }
              exception=new InternalException("something went wrong!",error,ErrorCode.INTERNAL_EXCEPTION)
            }
            next(exception);

        }
    }
}