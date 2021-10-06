import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const reqClone = req.clone({
      // headers
      //tambien puedo agregar params
    });

    return next.handle( reqClone ).pipe(
      catchError( this.handleError )
    );
  }
    handleError( error: HttpErrorResponse ) {
console.log(error);
      return throwError(error);
    }
  
  }
  

