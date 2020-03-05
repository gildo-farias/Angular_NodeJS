import { SystemService } from './../system.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'system-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {   
  
  acess:Boolean;
  options:string[];
  optionsLinks:string[];
  
  constructor(private _systemService: SystemService) { }

  ngOnInit() {    
    this.options = this._systemService.getOptions();
    this.optionsLinks = this._systemService.getOptionsLinks();
    this.acess = this._systemService.logger.admin;
  }

  onOpenCloseSidebar(){
    this._systemService.sidebar = !this._systemService.sidebar;        
  }

}
