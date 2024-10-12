// message indecate the status code. 
export class HttpException extends Error{
    message:string;
    errorCode:any;
    statusCode:number;
    errors:ErrorCode;
    constructor (message:string,errorCode:ErrorCode,statusCode:number,error:any){
        super(message)
        this.message=message
        this.errorCode=errorCode
        this.statusCode=statusCode
        this.errors=error
        
    }

}
export enum ErrorCode{
    USER_NOT_FOUND=1001,
    USER_ALREADY_EXIST=1002,
    INCORRECT_PASSWORD=1003,
    Address_Not_Found=1004,
    Address_Not_belogn=1005,
    UNPROCESSABLEENITY=2001,
    INTERNAL_EXCEPTION=3001,
    UNAUTHORIZED_TOKEN=4001,
    PRODUCT_NOT_FOUND=5001,
}