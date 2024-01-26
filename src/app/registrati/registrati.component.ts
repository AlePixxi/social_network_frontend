import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteDaRegistrareDTO } from 'src/dto/UtenteDaRegistrareDTO';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {

  utenteDaRegistrare = new UtenteDaRegistrareDTO("", "", "", "", "", new Date());

  confermaPassword : string = "";

  constructor(private registrazioneService: LoginService,private router: Router) {}

  onSubmit() {

    console.log(this.utenteDaRegistrare);
    this.registrazioneService.registrazione(this.utenteDaRegistrare).subscribe({
      next: (data) => {
        console.log(data);
        alert("registrazione andata a buon fine")
      },
      error: (error) => {
        console.log(error);
        
      }
    });
    
  }

}
