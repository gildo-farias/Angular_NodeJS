import { ConfirmarSaida } from './../../guards/confirmar-saida';
import { Subscription } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LivrosService } from '../../../services/livros.service';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'system-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit, ConfirmarSaida {

  livros:Livro[];  
  generos:String[]= [];

  private _filtro: String = "";
  public get filtro(): String {
    return this._filtro;
  }
  public set filtro(value: String) {    
    this._filtro = value;    
    if(this.onFiltrarLivro().length==0){
      this.notFoundFiltro = true;      
    }else{
      this.notFoundFiltro = false;      
    }    
  }
  notFoundFiltro:boolean;  

  constructor(private _livrosService: LivrosService) { }

  ngOnInit() {
    this.livros = this._livrosService.getLivros();         
  }

  onFiltrarLivro(){    
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }else{      
      return this.livros.filter((liv) => {
        if(
          (<String>liv.tit).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
          (<String>liv.subTit).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
          (<String>liv.autor).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
        ){                              
          return true;
        }else{                                
          return false;                    
        }
      });                   
    }    
    
  }//filtarlivros()  

  confirmarSaidaPagina(){
    console.log(this.notFoundFiltro);
    if(!this.notFoundFiltro && this.notFoundFiltro != undefined){
      return confirm('CONFIRMA A SAIDA DA PAGINA?');
    }
    return true;
  }


}
