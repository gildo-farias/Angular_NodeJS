import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'livros-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.scss']
})
export class DetalheLivroComponent implements OnInit{  

  constructor(
    private _route: ActivatedRoute,    
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
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();   
    this.livro = null; 
  }

}
