import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{  
  
  constructor(private _http:HttpClient) { }

  private readonly API:string = `${environment.API}usuarios`;

  getUsuarios(){
    return this._http.get<Usuario[]>(this.API);
  }  
   

}
