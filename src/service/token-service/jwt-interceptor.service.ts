import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Verifica se la richiesta è per un endpoint pubblico
    if (this.isPublicEndpoint(request)) {
      // Se è pubblico, passa la richiesta senza aggiungere il token

      return next.handle(request);
    }

    // Altrimenti, ottieni il token dal servizio AuthService
    const token = this.tokenService.getToken();

    // Aggiungi il token all'header Authorization della richiesta
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Passa la richiesta modificata all'handler successivo
    return next.handle(request);
  }

  private isPublicEndpoint(request: HttpRequest<any>): boolean {
    return (
      request.url.includes('/registrati') ||
      request.url.includes('/login')
    );
  }
}