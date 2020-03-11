import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _routes: Router,
    private _livrosService: LivrosService    
  ) { }

  codigo:number;
  livro:Livro;
  inscricao:Subscription;

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];      
    });
    this.livro = this._livrosService.getLivro(this.codigo);   
    if(this.livro==null){
      this._routes.navigate(['livros']);
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();    
  }

}
