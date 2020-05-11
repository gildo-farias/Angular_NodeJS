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
  getLivros() {
    return this._http.get<Livro[]>(this.API);
  }

  getLivro(id: number) {
    if(id!=null){
      return this._http.get<Livro>(`${this.API}/${id}`);
    }else{
      return null;
    }    
  }

  create(valores){
    return this._http.post(this.API, valores).pipe(take(1));
  }
  read(id){
    return this._http.get<Livro>(`${this.API}/${id}`);
  }
  update(id, valores){
    return this._http.put(`${this.API}/${id}`, valores).pipe(take(1));
  }  
  delete(id){
    return this._http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
