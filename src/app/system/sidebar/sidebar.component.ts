import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'system-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  btnSidebar:boolean;
  @Input() onOpen;
  
  tempo;
  hor:number = 0;  min:number = 0;  seg:number = 0;

  username = "mary@78";
  nome = "Maria";
  snome = "Silva"
  gen = 'f';

  cronometro() {    
    this.tempo = setInterval(() => {      
      if (this.seg == 60) { this.min++; this.seg = 0; }      
      if (this.min == 60) { this.hor++; this.min = 0; }                  
      this.seg++;              
    }, 1000);  
  }
  
  constructor() { }

  ngOnInit() {    
    console.log(this.onOpen);
    this.cronometro();
  }

    

  
  onOpenSidebar(event){
    console.log(event);   
    
      // document.getElementById("mySidebar").style.width = "250px";
      // document.getElementById("main").style.marginLeft = "250px";
        
      // document.getElementById("mySidebar").style.width = "0";
      // document.getElementById("main").style.marginLeft= "0";
    
    
  }


}
