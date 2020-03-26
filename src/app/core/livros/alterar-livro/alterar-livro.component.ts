import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Livro } from 'src/model/livro';
import { LivrosService } from 'src/services/livros.service';

@Component({
  selector: 'livros-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.scss']
})
export class AlterarLivroComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,        
    private _livrosService: LivrosService    
  ) { }

  codigo:number;
  livro:Livro;
  inscricao:Subscription;

  ngOnInit(): void {         
    this.inscricao = this._route.parent.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];                         
    });        
    this.livro = this._livrosService.getLivro(this.codigo);      
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();   
    this.livro = null; 
  }

}
