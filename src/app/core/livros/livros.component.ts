import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'system-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros:Livro[] = new Array;  
  livros$: Observable<Livro[]>;
  generos:String[] = new Array;

  
  filtro: String = "";  

  constructor(private _livrosService: LivrosService) { }

  erro$ = new Subject<boolean>();
  ngOnInit() {
    this.onRefresh();    
  }

  onRefresh(){
    this.livros$ = this._livrosService.list().pipe(
      catchError(erro => {        
        this.erro$.next(true);
        console.error(erro);
        return empty;
      })
    );      
    this._livrosService.list().subscribe(data => this.livros = data);
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
