import { Component, OnInit, Input } from '@angular/core';

import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'livros-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss']
})
export class FormLivroComponent implements OnInit {

  generos: string[];
  @Input() livroAlterar: Livro;
  constructor(private _livroService: LivrosService) { }

  ngOnInit(): void {
    this.generos = this._livroService.getGeneros();    
  }

}
