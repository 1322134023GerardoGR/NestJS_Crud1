import {
  CallHandler, ExecutionContext, Injectable,
  NestInterceptor, HttpException, HttpStatus, } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          return throwError(() => new HttpException(error.getResponse(), error.getStatus()));
        }
        return throwError(() => new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR));
      }),
    );
  }
}