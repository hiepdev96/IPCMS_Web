import { Injectable, ErrorHandler, Injector, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SwaggerException } from '../../common/model/generic-model'
@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them.
        @Inject(Injector) private readonly injector: Injector
    ) {
    }

    handleError(error: Error | HttpErrorResponse | SwaggerException): void {
        console.log(error);
        // // const authService = this.injector.get(AuthService);
        // if (SwaggerException.isSwaggerException(error)) {
        //   if (error.status === HttpStatusCode.InternalServerError) {
        //     this.alertService.error('Hệ thống có lỗi');
        //   } else if (error.status === HttpStatusCode.BussinessException) {
        //     if (error.response && error.response.length >= 2) {
        //       this.alertService.error(error.response.substr(1, error.response.length - 2));
        //     }
        //   } else if (error.status === HttpStatusCode.Unauthorized) {
        //     this.alertService.error('Phiên đăng nhập đã hết hạn');
        //     authService.logout();
        //   } else {
        //     this.alertService.error(error.response);
        //   }
        // } else if (error instanceof HttpErrorResponse) {
        //   // Server or connection error happened
        //   if (!navigator.onLine) {
        //     // Handle offline error
        //     return this.alertService.error('Không có kết nối mạng');
        //   } else {
        //     // Handle Http Error (error.status === 403, 404...)
        //     return this.alertService.error(`${error.status} - ${error.message}`);
        //   }
        // } else {
        //   // Handle Client Error (Angular Error, ReferenceError...)
        // }

        // Log the error anyway
        console.error('It happens: ', error);
    }
}