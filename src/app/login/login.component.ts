import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteDaLoggareDTO } from 'src/dto/UtenteDaLoggareDTO';
import { AuthenticationService } from 'src/service/authentication.service';
import { TokenService } from 'src/service/token-service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  utenteDaLoggare : UtenteDaLoggareDTO = new UtenteDaLoggareDTO("", "");

  constructor(private loginService: AuthenticationService, 
              private router: Router,
              private tokenService: TokenService) {}

  ngOnInit() {
    this.checkToken();
    
  }

  checkToken() {

    if (!this.tokenService.isTokenScaduto()) {
      
      const token = this.tokenService.decodeToken();
      console.log(token);
      
      alert(token)

    }


  }

  onSubmit() {
    
    this.loginService.login(this.utenteDaLoggare).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);

        alert("Login avvenuto correttamente");
        console.log(data.token);

        alert(this.tokenService.getScadenza());
        
      },
      error: (error) => {
        console.log(error);
        alert("Qualcosa è andato storto")
        
      }
    });
    
  }

}
