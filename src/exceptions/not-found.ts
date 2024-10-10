import { HttpException, ErrorCode } from "./root";  // Use your custom ErrorCode enum

export class NOtFoundException extends HttpException {
    constructor(message: string, errorCode: ErrorCode) {
        super(message, errorCode, 404, null);  // Use the ErrorCode from your root file
    }
}
