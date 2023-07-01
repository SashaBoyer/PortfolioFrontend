import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})

export class EditarExperienciaComponent implements OnInit{

  experienciaLab: Experiencia;


  /*temporal_experiencia: Experiencia = new Experiencia("","","","","");*/

  constructor(private experienciaServ: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){}


  ngOnInit():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServ.findExperiencia(id).subscribe(
      data =>{
        this.experienciaLab = data;
      }, err =>{
        alert("Falló modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  editarExpe():void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaServ.editExperiencia(id, this.experienciaLab).subscribe(
      data =>{
        alert("Experiencia modificada");
        this.router.navigate([''])
    }, err =>{
      alert("Falló modificar experiencia");
      this.router.navigate(['']);
    })

  }

}
