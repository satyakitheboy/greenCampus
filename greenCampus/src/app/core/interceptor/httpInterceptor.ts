import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators'
// @Injectable({
//     providedIn: 'root'
// })
// export class JwtTokenInterceptor implements HttpInterceptor {
//     constructor(private authService: AuthService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
//         // add Authorization header with jwt token if account is logged in.        
//         const isLoggedIn:boolean = this.authService.isLoggedIn ;
       
//         if (isLoggedIn) {
//             req = req.clone({
//                 setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` }
//             });
//         }
//         return next.handle(req).pipe(
//             map((event: HttpEvent<any>) => {
//                 if (event instanceof HttpResponse) {
//                     //this.logResponse(event, req)
//                 }else if(event instanceof HttpErrorResponse){
//                     this.handleError(event);
//                 }
//             }
//         )    )
//     }
//     private handleError(err: HttpErrorResponse): Observable<any> {

//         // if token has expired
//         if (err.status == 401) {
//             // refresh JWT token
//         }
//         // server error
//         else if (err.status == 500) {
//             //  handle your server error here
//         }
//         // rethrow Error
//         return throwError(err);
//     }
// }