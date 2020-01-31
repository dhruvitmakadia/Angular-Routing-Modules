import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { AuthService } from '../guard/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private spinner: NgxSpinnerService, private location: Location) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        console.log('Intercepted request ' + request.url);
        if (this.auth.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${this.auth.getToken()}`
                }
            });
        }
        return next.handle(request).pipe(tap(
            event => { },
            error => {
                if (error) {
                    console.log(error);
                    alert('Something went wrong...please try again');
                    this.location.back();
                }
            }

        ), finalize(() => {
            setTimeout(() => {
                this.spinner.hide();
            }, 500);

        }));
    }
}
