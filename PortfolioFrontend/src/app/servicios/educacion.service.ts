import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  asd1 = 'http://localhost:10000/educacion';
  asd2 = 'https://portfolio-backend-deploy.onrender.com/educacion';
  URL = this.asd2;

  constructor(private http: HttpClient) { }

  public listaEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL+'/ver');
  }

  public detailEducacion(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+`/ver/${id}`);
  }

  public saveEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, educacion);
  }

  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+ `/borrar/${id}`);
  }

  public updateEducacion(id:number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.URL + `/editar/${id}`, educacion);
  }
}
