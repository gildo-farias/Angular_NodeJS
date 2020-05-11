import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';

@Component({
  selector: 'system-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros:Livro[] = new Array;  
  livros$: Observable<Livro[]>;
  generos:String[] = new Array;

  notFoundFiltro:boolean;
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

  constructor(private _livrosService: LivrosService) { }

  ngOnInit() {
    this.livros$ = this._livrosService.getLivros();
    this._livrosService.getLivros().subscribe(data => this.livros = data);     
  }

  onFiltrarLivro(){        
    if(this.livros.length==0 || this.filtro == undefined || this.filtro.trim() == ''){      
      return this.livros;
    }else{      
      return this.livros.filter((liv) => {
        if(
          (<String>liv.titulo).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
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

}
