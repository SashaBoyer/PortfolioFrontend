import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL+'ver/educacion');
  }

  public postEducacion(educacion: Educacion): Observable<string> {
    return this.http.post<string>(`${this.URL}crear/educacion`, educacion);
  }

  public deleteEducacion(id: any): Observable<string> {
    return this.http.delete<string>(`${this.URL}borrar/educacion/${id}`);
  }

  public editEducacion(educacion: Educacion): Observable<Educacion> {
    const url = `${this.URL}editar/educacion/${educacion.id}?establecimiento=${educacion.establecimiento}&fechaDesde=${educacion.fechaDesde}&fechaHasta=${educacion.fechaHasta}&imagen=${educacion.imagen}&titulo=${educacion.titulo}`;
    return this.http.put<Educacion>(url,null);
  }
}
