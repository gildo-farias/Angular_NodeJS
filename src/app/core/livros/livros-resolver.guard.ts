import { Injectable } from '@angular/core';
import { Route, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosResolverGuard implements Resolve<Array<Livro>> {

  constructor(private _livrosService: LivrosService){}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any>{       
    return;    
  }

}
