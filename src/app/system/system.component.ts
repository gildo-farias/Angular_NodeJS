import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-root',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  selection: string;  

  constructor() { }

  ngOnInit() {
  } 

  receberSelection(event){    
    this.selection = event.sele + " → " + event.subSele;
  }

}
