import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'system-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() emitirSelection = new EventEmitter();
  @Output() emitirSidebar = new EventEmitter();
  sidebar:boolean = false;

  selection: string;
  @Input() options:string [];
  
  constructor() { }

  ngOnInit() {
    this.selection = this.options[0];
    this.emitirSelection.emit(this.selection);
  }

  onClickSelection(sele: HTMLLabelElement){    
    this.selection = sele.textContent;
    this.emitirSelection.emit(this.selection);
  }
  onOpenSidebar(){
    this.sidebar = !this.sidebar;
    this.emitirSidebar.emit(this.sidebar);
  }

}
