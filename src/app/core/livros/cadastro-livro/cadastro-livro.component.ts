import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'livros-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;  

  constructor() { }
  
  ngOnInit() {
  }  

  fechandoModal(){    
    this.closeModal.nativeElement.click();
  }

}
