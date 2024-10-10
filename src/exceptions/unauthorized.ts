import { HttpException } from "./root";
export class UnauthorizedExceptionn extends HttpException{
    constructor(message:string,errorCode:number,errors?:any){
        super(message,errorCode,401,errors);
    }
}