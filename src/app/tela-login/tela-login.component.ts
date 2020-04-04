import { Component, OnInit} from '@angular/core';
import { SystemService } from '../../services/system.service';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {   

  constructor(private _systemService: SystemService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {    
    this._systemService.logger = this._usuarioService.getUsuario();
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){    
    if(!this._systemService.login(user.value, pass.value))        
    alert("USUARIO/SENHA INVALIDOS!");                      
  }

}
