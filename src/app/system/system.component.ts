import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'system-root',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  selection: string;     
  options:string [] = ["LIVROS", "ALUGUEL", "CLIENTES", "USUARIOS"];

  constructor() { }

  ngOnInit() {        
  } 

  openCloseSidebar(event){       
    if(event){      
      document.getElementById("sidebar").style.width = "20%";      
      document.getElementById("sidebar").classList.add ("componentShadow");
      document.getElementById("main").style.marginLeft = "20%";      
    }else{      
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("sidebar").classList.remove("componentShadow");
      document.getElementById("main").style.marginLeft= "0";        
    }
  }

}
