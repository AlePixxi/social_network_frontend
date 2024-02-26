import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor() {}

  setDataDiCreazione(dataDiCreazione: string) {
    localStorage.setItem('dataDiCreazione', dataDiCreazione);
  }

  getDataDiCreazione(): any {
    return localStorage.getItem('dataDiCreazione');
  }

  getAuthority(): any {
    return localStorage.getItem('authority');
  }

  setAuthority(authority: string): void {
    localStorage.setItem('authority', authority);
  }

  getEmail(): any {
    return localStorage.getItem('email');
  }

  setEmail(email: any): void {
    localStorage.setItem('email', email);
  }

  setIsTokenValid(scadenza: any): void {
    localStorage.setItem('isTokenValid', scadenza);
  }

  getIsTokenValid() {
    return localStorage.getItem('isTokenValid');
  }

  getScadenza(): Date {
    return new Date();
  }

  decodeToken(): any {
    const token = this.getToken();

    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isTokenScaduto(): boolean {
    const token = this.getToken();

    if (token) {

      const decodedToken: any = jwtDecode(token);
      const dataScadenza = new Date(decodedToken.exp * 1000); // Converti da secondi a millisecondi
      const isScaduto = dataScadenza <= new Date();

      return isScaduto;
    }

    return true;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authority');
  }
}