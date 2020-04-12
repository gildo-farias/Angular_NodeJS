import { Injectable} from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{  
  
  private usuario:Usuario = {
    cod : 1,
    username : "root@123",
    senha : "123456",
    admin : true,
    nome : "Gildo",
    snome : "Farias",
    gen : "MASCULINO"    
  }

  private usuarioTest:Usuario = {
    cod : 2,
    username : "user@86",
    senha : "123456",
    admin : false,
    nome : "maria",
    snome : "torres",
    gen : "FEMININO"    
  }
     
  constructor() { }

  getUsuario(){
    return this.usuario;
  }

  getUsuarios(){
    return [this.usuario, this.usuarioTest];
  }
  

}
