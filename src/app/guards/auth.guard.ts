import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemService } from 'src/services/system.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _systemService: SystemService, private _route: Router) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
    
    if(this._systemService.logger!=null){
      return true;
    }    
    this._route.navigate(['/login']);
    return false;
  }
  
}
