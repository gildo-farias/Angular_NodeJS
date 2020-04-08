import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemService } from 'src/services/system.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private _systemService: SystemService, private _route: Router) {}

  private verificarLogin(): boolean{
    if(this._systemService.logger!=null){
      return true;
    }    
    this._route.navigate(['/login']);
    return false;
  }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
    return this.verificarLogin();    
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarLogin();  
  }

  
}
