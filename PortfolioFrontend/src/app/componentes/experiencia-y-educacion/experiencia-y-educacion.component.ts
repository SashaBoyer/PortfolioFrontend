import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { Experiencia } from 'src/app/model/experiencia.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css'],
})
export class ExperienciaYEducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  listaExperiencia: Experiencia[] = [];

  isLogged = false;

  constructor(
    private router: Router,
    public educacionService: EducacionService,
    public experienciaService: ExperienciaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarExperiencia();
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionService.listaEducacion().subscribe((data) => {
      this.educacion = data;
    });
  }

  borrarEducacion(id?: number) {
    if (id != undefined) {
      this.educacionService.deleteEducacion(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('No se pudo borrar la educacion');
        }
      );
    }
  }
  cargarExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe((data) => {
      this.listaExperiencia = data;
    });
  }

  borrarExperiencia(id?: number): void {
    if (id != undefined) {
      this.experienciaService.deleteExperiencia(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }
}
