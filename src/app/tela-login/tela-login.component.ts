import { SystemService } from './../system/system.service';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {   

  constructor(private _systemService: SystemService, private _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){
    if(user.value != undefined && pass.value != undefined){
      if(!this._usuarioService.login(user.value, pass.value))
        alert("USUARIO/SENHA INVALIDOS!");
    }   
  }

}
