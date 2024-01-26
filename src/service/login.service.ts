import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UtenteDaRegistrareDTO } from 'src/dto/UtenteDaRegistrareDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private superPath = 'http://localhost:8200/rest/api';

  constructor(private http: HttpClient) {}

  registrazione(utenteDaRegistrare: UtenteDaRegistrareDTO): Observable<any> {
    return this.http.post(
      `${this.superPath}/user/nuovo-utente`, utenteDaRegistrare);
  }

}
