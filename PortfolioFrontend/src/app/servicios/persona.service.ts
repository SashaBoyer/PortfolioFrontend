import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  asd1 = 'http://localhost:10000/persona';
  asd2 = 'https://portfolio-backend-deploy.onrender.com/persona';
  URL = this.asd2;

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ '/ver');
  }

  public postPersona(persona: Persona): Observable<string> {
    return this.http.post<string>(`${this.URL}/crear`, persona);
  }

  public deletePersona(id: any): Observable<string> {
    return this.http.delete<string>(`${this.URL}/borrar/${id}`);
  }

  public editPersona(persona: Persona): Observable<Persona> {
    const url = `${this.URL}/editar/${persona.id}?nombre=${persona.nombre}&apellido=${persona.apellido}&imagen=${persona.img}&titulo=${persona.titulo}&descripcion=${persona.descripcion}`;
    return this.http.put<Persona>(url, persona);
  }

  public findPersona(id: any): Observable<Persona> {
    return this.http.get<Persona>(`${this.URL}/ver/${id}`);
  }


}
