import { Component, OnInit, ɵDEFAULT_LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  
  persona: Persona = new Persona("", "", "", "", "");
  isLogged = false;

  constructor(private personaService: PersonaService, private router: Router, private tokenService:TokenService){}

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {this.isLogged = false;}
    this.personaService.getPersona()
      .subscribe(data => {
        this.persona = data;
      });
  }

  editar_persona(persona: Persona):void {
    localStorage.setItem("id",this.persona.id.toString());
    this.router.navigate(["editar_persona"]);
  }

}