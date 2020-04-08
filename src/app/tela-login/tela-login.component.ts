import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit} from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {   

  constructor(private _usuarioService: UsuarioService, private _systemService: SystemService, private _router: Router) { }

  ngOnInit() {        
    // this._systemService.logger = this._usuarioService.getUsuario();    
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){    
    if(this._systemService.login(user.value, pass.value)){
      this._router.navigate(['/']);
    }else{
      alert("USUARIO/SENHA INVALIDOS!");                      
    }
    
  }

}
