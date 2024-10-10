import { HttpException } from "./root";

export class UnprocessableEnity extends HttpException{
    constructor(error:any,message:string,errorCode:number){
        super(message,errorCode,442,error);
    }
}