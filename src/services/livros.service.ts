import { tap, delay } from 'rxjs/operators';
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
    return this._http.get<Livro[]>(this.API).pipe(delay(1000), tap());
  }

  getLivro(cod: number) {
    if(cod!=null){
      return this._http.get<Livro>(`${this.API}/${cod}`).pipe(tap());
    }else{
      return null;
    }    
  }

}
