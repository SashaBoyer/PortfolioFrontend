import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  nombre: string;
  descripcion: string;
  fecha_realizacion: Date;
  img: string;

  constructor(private proyectosS: ProyectosService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.fecha_realizacion, this.img);
    this.proyectosS.saveProyectos(proyectos).subscribe(
      data =>{
        alert("proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo el añadir proyecto");
        this.router.navigate(['']);
      }
    );
  }

}
