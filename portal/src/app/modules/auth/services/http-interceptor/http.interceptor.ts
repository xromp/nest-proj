import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import {
  HideLoaderAction,
  ShowLoaderAction,
} from '../../../../store/loader/loader.actions';
import { finalize } from 'rxjs/operators';

Injectable();
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(new ShowLoaderAction());
    const auth = localStorage.getItem('token') ?? '';
    if (auth) {
      const { authToken: token } = JSON.parse(auth);
      if (token)
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token),
        });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      finalize(() => this.store.dispatch(new HideLoaderAction()))
    );
  }
}
