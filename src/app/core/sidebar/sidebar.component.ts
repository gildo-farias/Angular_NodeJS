import { UsuarioService } from './../../../services/usuario.service';
import { SystemService } from '../../../services/system.service';

import { Usuario } from '../../../model/usuario';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'system-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {  

  constructor(private _systemService: SystemService) { }

  tempo;
  hor:number = 0;  min:number = 0;  seg:number = 0;
  
  options:string[];
  optionsLinks:string[];

  usuario:Usuario;
  
  cronometro() {    
    this.tempo = setInterval(() => {      
      if (this.seg == 60) { this.min++; this.seg = 0; }      
      if (this.min == 60) { this.hor++; this.min = 0; }                  
      this.seg++;              
    }, 1000);  
  }

  ngOnInit() {            
    this.cronometro();    
    this.usuario = this._systemService.logger;
    this.options = this._systemService.getOptions();
    this.optionsLinks = this._systemService.getOptionsLinks();
  }

  onCloseSidebar(){          
    this._systemService.sidebar = false;      
  }

  onLogoff(){
    this._systemService.logger = null;
    this._systemService.logger$.emit(false);
  }

}
