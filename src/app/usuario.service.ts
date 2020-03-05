import { SystemService } from './system/system.service';
import { Usuario } from './models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {  
  
  usuario:Usuario = {
    cod : 1,
    username : "gil@84",
    senha : "123456",
    admin : true,
    nome : "Gildo",
    snome : "Farias",
    gen : "MASCULINO"    
  }
  
    
  constructor(private _systemService: SystemService) { 
    // this._usuario.cod = 1;
    // this._usuario.username = "gil@84";
    // this._usuario.senha = "123456";
    // this._usuario.admin = true;

    // this._usuario.nome = "Gildo";
    // this._usuario.snome = "Farias";
    // this._usuario.gen = "MASCULINO";    
  }

  getUsuario(){
    return this.usuario;
  }

  login(username: String, senha: String){
    if(username === this.getUsuario().username && senha === this.getUsuario().senha){
      // this.logado = this.getUsuario();
      this._systemService.logger = this.getUsuario();
      return true;
    }else return false;
  }

}
