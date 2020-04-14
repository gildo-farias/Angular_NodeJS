import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../model/usuario';
import { FormControl } from '@angular/forms';

@Injectable()
export class SystemService {
  
  constructor(private _usuarioService: UsuarioService) { }  

  private _logger: Usuario;      

  public get logger(): Usuario {
    return this._logger;
  }
  public set logger(value: Usuario) {
    this._logger = value;
    // console.log(this._logger);
  }

  login(username: String, senha: String){
    if(username === this._usuarioService.getUsuario().username && senha === this._usuarioService.getUsuario().senha){      
      this.logger = this._usuarioService.getUsuario();
      return true;
    }
    return false;
  }
  
  // *********************** LINKS *********************** // 
  private options:string [] = ["LIVROS", "LOCAÇÃO", "CLIENTES", "USUARIOS"];
  private optionsLinks:string []= ['/livros','/locacao', '/clientes','/usuarios'];
  getOptions(){ return this.options; }  
  getOptionsLinks(){ return this.optionsLinks; }  
  // **************************************************** // 

  // *********************** SIDEBAR *********************** // 
  private _sidebar: boolean = false;

  public get sidebar(): boolean {
    return this._sidebar;
  }
  public set sidebar(value: boolean) {
    this._sidebar = value;
    if(this._sidebar){      
      document.getElementById("sidebar").style.width = "20%";      
      document.getElementById("sidebar").classList.add ("componentShadow");
      document.getElementById("main").style.marginLeft = "20%";      
    }else{      
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("sidebar").classList.remove("componentShadow");
      document.getElementById("main").style.marginLeft= "0";        
    }
  }
  // ****************************************************** // 

}//end Service
