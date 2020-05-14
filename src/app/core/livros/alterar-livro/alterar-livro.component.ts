import { ConfirmarSaida } from './../../../guards/confirmar-saida';
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
export class AlterarLivroComponent implements OnInit, ConfirmarSaida {

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
    this._livrosService.read(this.codigo).subscribe(data => this.livro = data);    
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();   
    this.livro = null; 
  }

  formAlterado:boolean;
  escutandoMudanca(event){    
    this.formAlterado = event;
  }

  confirmarSaidaPagina():boolean{
    if(this.formAlterado){
      return confirm('DESEJA REALMENTE SAIR DA PAGINA?');      
    }   
    return true;
  }

}
