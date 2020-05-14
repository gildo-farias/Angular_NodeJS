import { SystemService } from 'src/services/system.service';
import { Usuario } from 'src/model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Livro } from 'src/model/livro';
import { LivrosService } from 'src/services/livros.service';

@Component({
  selector: 'livros-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.scss']
})
export class DetalheLivroComponent implements OnInit{  

  constructor(
    private _route: ActivatedRoute,             
    private _livrosService: LivrosService,
    private _systemService: SystemService
  ) { }

  user:Usuario
  codigo:number;
  livro:Livro = new Livro;
  inscricao:Subscription;
  livro$: Observable<Livro>;

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.user = this._systemService.logger;
    this.inscricao = this._route.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];      
    });
    this._livrosService.read(this.codigo).subscribe(data => this.livro = data);
    this.livro$ = this._livrosService.read(this.codigo);     
  }

  ngOnDestroy() {    
    this.inscricao.unsubscribe();   
    this.livro = null; 
  }  
}
