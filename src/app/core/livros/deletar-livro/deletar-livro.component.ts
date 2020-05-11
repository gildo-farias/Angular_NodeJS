import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deletar-livro',
  templateUrl: './deletar-livro.component.html',
  styleUrls: ['./deletar-livro.component.scss']
})
export class DeletarLivroComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,        
    private _livrosService: LivrosService    
  ) { }

  codigo:number;
  livro:Livro = new Livro;
  inscricao:Subscription;

  onDelete(){
    this._livrosService.delete(this.codigo).subscribe(
      success => console.log('deletado!'),
      error => console.error(error),
      () => console.log('request completada')
    )
  }

  ngOnInit(): void {         
    this.inscricao = this._route.parent.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];                         
    });        
    this._livrosService.getLivro(this.codigo).subscribe(data => this.livro = data);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();   
    this.livro = null; 
  }

}
