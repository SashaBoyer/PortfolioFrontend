import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  
  listaEducacion: Educacion[] = [];
  
  constructor(public educacionService: EducacionService) {}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.listaEducacion = data;
      console.log("ESTE ES EL CONSOLEEE "+this.listaEducacion[1].establecimiento);
    });
    };
  
}


