import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UtenteDaRegistrareDTO } from 'src/dto/UtenteDaRegistrareDTO';
import { UtenteDaLoggareDTO } from 'src/dto/UtenteDaLoggareDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private superPath = 'http://localhost:8200/rest/api';

  

  constructor(private http: HttpClient) {}

  registrazione(utenteDaRegistrare: UtenteDaRegistrareDTO): Observable<any> {
    return this.http.post(
      `${this.superPath}/user/nuovo-utente`, utenteDaRegistrare);
  }

  login(utenteDaLoggare: UtenteDaLoggareDTO): Observable<any> {
    return this.http.post(
      `${this.superPath}/user/login`, utenteDaLoggare);
  }

}
