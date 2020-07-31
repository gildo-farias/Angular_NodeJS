import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Injectable()
export class ClientesService {  

  constructor(private _http: HttpClient) { }

  private readonly API: string = `${environment.API}`;
  list(){
    return this._http.get<Cliente[]>(`${this.API}/clientes`);
  }

  // *********  CRUD  *********
  create(cliente:Cliente){
    return this._http.post(`${this.API}/cliente`, cliente).pipe(take(1));
  }
  read(id:Number){
    return this._http.get<Cliente>(`${this.API}/cliente/${id}`);
  }
  update(cliente:Cliente){
    return this._http.put(`${this.API}/cliente`, cliente).pipe(take(1));
  }  
  delete(id:Number){
    return this._http.delete(`${this.API}/cliente/${id}`).pipe(take(1));
  }

}
