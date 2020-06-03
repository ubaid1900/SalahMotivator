import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log(`centralized error handler service`);
        console.error(error);
    }
}
