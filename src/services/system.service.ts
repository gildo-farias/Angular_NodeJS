import { Injectable, EventEmitter } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../model/usuario';

@Injectable()
export class SystemService {
  
  constructor(private _usuarioService: UsuarioService) { }  

  logger: Usuario;
  logger$ = new EventEmitter<Boolean>();
  
  login(username: String, senha: String): Boolean{
    this.logger = this._usuarioService.auth(username, senha);
    if(this.logger != undefined || this.logger != null){
      this.logger$.emit(true);
      return true;
    }    
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
