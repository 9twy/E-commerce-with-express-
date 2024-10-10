import { HttpException, ErrorCode } from "./root";  // Use your custom ErrorCode enum

export class BadRequestException extends HttpException {
    constructor(message: string, errorCode: ErrorCode) {
        super(message, errorCode, 400, null);  // Use the ErrorCode from your root file
    }
}
