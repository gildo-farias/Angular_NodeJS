import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Endereco } from './../model/endereco';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Injectable()
export class ClientesService {  

  constructor(private _http: HttpClient) { }

  private readonly API: string = `${environment.API}clientes`;  
  list(){
    return this._http.get<Cliente[]>(this.API);
  }

  // *********  CRUD  *********
  create(cliente:Cliente){
    return this._http.post(this.API, cliente).pipe(take(1));
  }
  read(id:Number){
    return this._http.get<Cliente>(`${this.API}/${id}`);
  }
  update(id:Number, cliente:Cliente){
    return this._http.put(`${this.API}/${id}`, cliente).pipe(take(1));
  }  
  delete(id:Number){
    return this._http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
