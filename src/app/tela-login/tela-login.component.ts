import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/services/system.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {   

  constructor(private _systemService: SystemService, private _router: Router,
    private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._systemService.logger = this._usuarioService.auth('root@123', '123456');
    this._systemService.logger$.emit(true);
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){    
    if(this._systemService.login(user.value, pass.value)){
      this._router.navigate(['/']);      
    }else{
      alert('DADOS DE ACESSO INVALIDOS!')
    }
    
  }

}
