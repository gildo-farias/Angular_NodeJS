import { ConfirmarSaida } from './confirmar-saida';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlterarLivroComponent } from '../core/livros/alterar-livro/alterar-livro.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarSaidaGuard implements CanDeactivate<ConfirmarSaida> {
  canDeactivate(
    component: ConfirmarSaida,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return component.confirmarSaidaPagina();    
    
  }
  
}
