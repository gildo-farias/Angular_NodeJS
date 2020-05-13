import { Injectable} from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{  
  private passwords = [{
    username: "root@123",
    senha : "123456"
  },{
    username: "maria@86",
    senha : "123456"
  }];
  private usuario:Usuario = {
    cod : 1,
    username : "root@123",    
    admin : true,
    nome : "Gildo",
    snome : "Farias",
    gen : "MASCULINO"    
  } 

  private usuarioTest:Usuario = {
    cod : 2,
    username : "maria@86",    
    admin : false,
    nome : "maria",
    snome : "torres",
    gen : "FEMININO"    
  }
  
  constructor() { }

  auth(username, senha):Usuario{
    let user;
    this.passwords.forEach(element => {
      if(element.username === username && element.senha === senha){
       user = username;
      }
    });
    return this.getUsuario(user);
  }

  private getUsuario(username):Usuario{
    let user:Usuario;
    this.getUsuarios().forEach(element => {
      if(username === element.username)
      user = element;
    });    
    return user;
  }
 
  getUsuarios(){
    return [this.usuario, this.usuarioTest];
  }  
   

}
