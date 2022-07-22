import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  /**ESTAN YO AQUI EN TU FRONTEND Y TENIENDO LA URL LA CAMBIAS AQUI ABAJO*/
  
  //URL = 'http://localhost:8080/personas/';
  URL = 'https://guillermoTuApellido.heroku.com'

  constructor(private http: HttpClient) { }

/*   public getPersona(): Observable<persona>{ //ESTÁ MAL
     return this.http.get<persona>(this.URL +'traer/perfil'); // ESTO ESTÁ MAL
    
  } */

  //////////////////////////GET////////////////

//Para traer los datos personales tuyos vas a hacer esto de aqui abajo.
  getPersona(){
    return this.http.get(`${this.URL}traer`)
  }
//Para obtener la educacion vas hacer esto de abajo
  getEducation(){
    return this.http.get(`${this.URL}traer/educacion`)
  }

  //Para obtener la experiencian vas hacer esto de abajo
  getExperiencia(){
    return this.http.get(`${this.URL}traer/experiencia`)
  }

  //Para obtener la Proyectos vas hacer esto de abajo
  getProyectos(){
    return this.http.get(`${this.URL}traer/proyectos`)
  }

  //////////////////////////POST////////////////
  //aqui vas hacer algo similar a lo de arriba, solo que vas a crear las funciones para actualizar/borrar los datos

  //Para traer los datos personales tuyos vas a hacer esto de aqui abajo.
  postPersona(){
    return this.http.post(`${this.URL}actualizar`) // luego fijate los parametros que necesitan
  }

  postEducacion(){
    return this.http.post(`${this.URL}actualizar`) // luego fijate los parametros que necesitan
  }

  postExperiencia(){
    return this.http.post(`${this.URL}actualizar`) // luego fijate los parametros que necesitan
  }

  //////////////////////////DELETE////////////////
  deleteExperiencia(){
    return this.http.delete(`${this.URL}borrar`) // luego fijate los parametros que necesitan
  }

  deleteExperiencia(){
    return this.http.delete(`${this.URL}borrar`) // luego fijate los parametros que necesitan
  }

  deleteExperiencia(){
    return this.http.delete(`${this.URL}borrar`) // luego fijate los parametros que necesitan
  }

  //basicamente esto tendrías que hace para ir obteniendo los datos y mostrarlos en tu FRONTEND
}
