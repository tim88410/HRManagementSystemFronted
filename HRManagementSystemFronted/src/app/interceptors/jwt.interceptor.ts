import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {

  // 你在 AuthService 裡已簡化好的 Base64 字串，直接帶入
  private basicAuthBase64 = '簡化後的Base64字串(例: dXNlcjpwYXNz)';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 從 localStorage 拿 JWT Token
    const jwtToken = localStorage.getItem('jwtToken');

    let authReq = req;

    if (jwtToken) {
      // 有 JWT Token，帶 Bearer Token
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
    } else {
      // 沒 JWT Token，帶 Basic 認證
      authReq = req.clone({
        setHeaders: {
          Authorization: `Basic ${this.basicAuthBase64}`
        }
      });
    }

    return next.handle(authReq);
  }
}