import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'system-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {  
  tempo;
  hor:number = 0;  min:number = 0;  seg:number = 0;
  @Output() emitirSelection = new EventEmitter();
  @Input() options:string [];

  usuario:any = {
    username : "mary@78",
    nome : "Maria",
    snome : "Silva",
    gen : 'f',
  }  
  cronometro() {    
    this.tempo = setInterval(() => {      
      if (this.seg == 60) { this.min++; this.seg = 0; }      
      if (this.min == 60) { this.hor++; this.min = 0; }                  
      this.seg++;              
    }, 1000);  
  }
  
  constructor() { }

  ngOnInit() {            
    this.cronometro();
  }

  onClickSelection(sele: HTMLLabelElement){        
    this.emitirSelection.emit(sele.textContent);
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").classList.remove("componentShadow");
    document.getElementById("main").style.marginLeft= "0"; 
  }

}
