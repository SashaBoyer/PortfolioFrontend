import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'https://portfolio-backend-deploy.onrender.com/proyecto';

  constructor(private http: HttpClient) { }

  public listaProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL+'/ver');
  }

  public detailProyectos(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL+`/ver/${id}`);
  }

  public saveProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(this.URL + '/crear', proyectos);
  }

  public deleteProyectos(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `/borrar/${id}`);
  }

  public updateProyectos(id: number, proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(this.URL + `/editar/${id}`, proyectos);
  }
}