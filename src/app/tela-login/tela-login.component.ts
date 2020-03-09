import { Component, OnInit} from '@angular/core';

import { SystemService } from '../../services/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {   

  constructor(
    private _systemService: SystemService,
    private _router: Router,    
  ) { }

  ngOnInit() {
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){
    if(user.value != undefined && pass.value != undefined){
      if(this._systemService.login(user.value, pass.value)){
        this._router.navigate(['/livros']);
      }else{
        alert("USUARIO/SENHA INVALIDOS!");        
      }        
    }   
  }

}
