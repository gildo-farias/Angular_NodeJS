import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemService } from 'src/services/system.service';

@Injectable()
export class AdminGuard implements CanActivateChild {

  constructor(private _systemService: SystemService){}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this._systemService.logger.admin){      
      return true;
    }else{
      alert('Usuario sem acesso a este modulo!');
      return false;    
    }    
  }
  
}
