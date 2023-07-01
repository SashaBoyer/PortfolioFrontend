import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  asd1 = 'http://localhost:10000/experiencia';
  asd2 = 'https://portfolio-backend-deploy.onrender.com/experiencia';
  URL = this.asd2;

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL+'/ver');
  }

  public postExperiencia(experiencia: Experiencia): Observable<string> {
    return this.http.post<string>(`${this.URL}/crear`, experiencia);
  }

  public saveExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, experiencia);
  }

  public deleteExperiencia(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }

  public editExperiencia(id: any, experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.URL}/editar/${experiencia.id}?empresa=${experiencia.empresa}&puesto=${experiencia.puesto}&fecha_desde=${experiencia.fecha_desde}&fecha_hasta=${experiencia.fecha_hasta}&descripcion=${experiencia.descripcion}`;
    return this.http.put<Experiencia>(url, experiencia);
  }

  public findExperiencia(id: any): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.URL}/ver/${id}`);
  }

}
