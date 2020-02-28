import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'system-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() emitirSelection = new EventEmitter();
  @Output('sidebarButton') emitirSidebarButton = new EventEmitter();
  btnSidebar:boolean = false;

  selection: string;
  option:string;
  
  OPTIONS:string [][] = [
    ["LIVROS", "PESQUISAR", "CADASTRO"],
    ["LOCAÇÃO", "LOCAR", "DEVOLUÇÃO"],
    ["CLIENTES", "CONSULTAR", "CADASTRO"],
    ["USUARIOS", "CONSULTAR", "CADASTRAR"]
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickActive(sele:string){
    this.selection = sele;    
  }
  onClickSelection(sele: string){    
    this.option = sele;
    this.emitirSelection.emit({sele:this.selection,subSele:this.option});    
  }
  // onOpenSidebar(){
  //   this.btnSidebar = !this.btnSidebar;
  //   this.emitirSidebarButton.emit(this.btnSidebar);    
  // }

}
