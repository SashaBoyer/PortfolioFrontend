import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  establecimiento: string;
  fecha_desde: any;
  fecha_hasta: any;
  imagen: string;
  titulo: string;

  constructor(private educacionService: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.establecimiento, this.fecha_desde, this.fecha_hasta, this.imagen, this.titulo);
    this.educacionService.saveEducacion(educacion).subscribe(
      data =>{
        alert("educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo el añadir educacion");
        this.router.navigate(['']);
      }
    );
  }

}
