import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteDaRegistrareDTO } from 'src/dto/UtenteDaRegistrareDTO';
import { AuthenticationService as AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {

  utenteDaRegistrare = new UtenteDaRegistrareDTO("", "", "", "", "", new Date());

  confermaPassword : string = "";

  constructor(private registrazioneService: AuthenticationService,private router: Router) {}

  onSubmit() {

    console.log(this.utenteDaRegistrare);
    this.registrazioneService.registrazione(this.utenteDaRegistrare).subscribe({
      next: (data) => {
        console.log(data);
        alert("registrazione andata a buon fine")
        this.router.navigate(["login"])
      },
      error: (error) => {
        console.log(error);
        
      }
    });
    
  }

}
