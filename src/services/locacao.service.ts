import { take } from 'rxjs/operators';
import { LocacaoJSON } from 'src/model/locacaoJSON';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocacaoService {

  constructor(private _http: HttpClient) { }

  private readonly API: string = `${environment.API}/locacao`;
 

  // *********  CRUD  *********
  list() {
    return this._http.get<LocacaoJSON[]>(this.API).pipe(take(1));
  }   
  read(id:Number){
    return this._http.get<LocacaoJSON>(`${this.API}/${id}`);
  }
  create(locacao:LocacaoJSON){
    return this._http.post(`${this.API}`, locacao).pipe(take(1));
  }
  update(locacao:LocacaoJSON){
    return this._http.put(`${this.API}`, locacao).pipe(take(1));
  }  
  delete(id:Number){
    return this._http.delete(`${this.API}/${id}`);
  }
}
