import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';

import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';


@Component({
  selector: 'livros-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss']
})
export class FormLivroComponent implements OnInit {

  @Output() avisarAlteracao = new EventEmitter();
  formAlterado: boolean = false;

  generos: string[];  
  @Input('livroAlterar') livro: Livro = new Livro;
  
  constructor(private _livroService: LivrosService) { }

  ngOnInit(): void {
    this.generos = this._livroService.getGeneros();        
  }

  onInput(){
    this.formAlterado = true;
    this.avisarAlteracao.emit(this.formAlterado);
  }

  onSubmit(formLivro){    
    console.log(formLivro.valid);
  }
  

}
