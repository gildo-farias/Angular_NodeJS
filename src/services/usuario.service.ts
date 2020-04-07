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
     
  constructor() { }

  getUsuario(){
    return this.usuario;
  }
  

}
