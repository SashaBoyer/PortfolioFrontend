import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(private proyectosS: ProyectosService, private tokenService: TokenService) {}

  isLogged = false;


  ngOnInit(): void {
    this.cargarProyectos(); 
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosS.listaProyectos().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }

  borrarProyectos(id?: number){
    if(id != undefined){
     this.proyectosS.deleteProyectos(id).subscribe(
      data => {
        this.cargarProyectos();
      }, err => {
        alert("no se pudo eliminar");
      }
     )
    }
  }

}
