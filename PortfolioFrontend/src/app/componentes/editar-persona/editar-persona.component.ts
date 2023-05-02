import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit{

  datosPersona: Persona = null;
  

  constructor(private personaServ: PersonaService, private activatedRouter: ActivatedRoute, private router: Router){}


  ngOnInit():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServ.findPersona(id).subscribe(
      data =>{
        this.datosPersona = data;
      }, err =>{
        alert("Falló modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  editarPersona():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServ.editPersona(id, this.datosPersona).subscribe(
      data =>{
        alert("datos modificados");
        this.router.navigate([''])
    }, err =>{
      alert("Falló modificación de datos");
      this.router.navigate(['']);
    })

  }
    

}
