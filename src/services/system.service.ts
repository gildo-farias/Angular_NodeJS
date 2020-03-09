import { UsuarioService } from './usuario.service';
import { Usuario } from '../model/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private _logger: Usuario;      
  public get logger(): Usuario {
    return this._logger;
  }
  public set logger(value: Usuario) {
    this._logger = value;
    // console.log(this._logger);
  }

  private options:string [] = ["LIVROS", "LOCAÇÃO", "CLIENTES", "USUARIOS"];
  private optionsLinks:string []= ['/livros','/loca', '/clientes','/usuarios'];

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

  constructor(private _usuarioService: UsuarioService) { }

  getOptions(){ return this.options; }  
  getOptionsLinks(){ return this.optionsLinks; }  

  login(username: String, senha: String){
    if(username === this._usuarioService.getUsuario().username && senha === this._usuarioService.getUsuario().senha){      
      this.logger = this._usuarioService.getUsuario();
      return true;
    }else return false;
  }
}