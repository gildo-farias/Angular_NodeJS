import { take } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from 'src/model/livro';

@Injectable()
export class LivrosService {

  constructor(private _http: HttpClient) { }

  getGeneros() {
    let generos: string[] = new Array;
    this._http.get('assets/data/generos.json').subscribe(data => {
      let valores: any = data.valueOf();
      valores.forEach(element => {
        generos.push((element.genero).toString());
      });
    });
    return generos;
  }

  private readonly API: string = `${environment.API}livros`;
  list() {
    return this._http.get<Livro[]>(this.API);
  } 

  // *********  CRUD  *********
  create(livro:Livro){
    return this._http.post(this.API, livro).pipe(take(1));
  }
  read(id:Number){
    return this._http.get<Livro>(`${this.API}/${id}`);
  }
  update(id:Number, livro:Livro){
    return this._http.put(`${this.API}/${id}`, livro).pipe(take(1));
  }  
  delete(id:Number){
    return this._http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
