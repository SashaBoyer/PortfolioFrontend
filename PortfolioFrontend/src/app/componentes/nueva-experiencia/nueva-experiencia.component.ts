import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  empresa: string;
  puesto: string;
  fecha_desde: any;
  fecha_hasta: any;
  descripcion: string;


  constructor(private experienciaService: ExperienciaService, private router: Router){ }

  ngOnInit(): void {}

  onCreate(): void {
    const experiencia = new Experiencia(this.empresa, this.puesto, this.fecha_desde, this.fecha_hasta, this.descripcion);
    this.experienciaService.saveExperiencia(experiencia).subscribe(
      data =>{
        alert("experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo el añadir experiencia");
        this.router.navigate(['']);
      }
    );
  }
}
