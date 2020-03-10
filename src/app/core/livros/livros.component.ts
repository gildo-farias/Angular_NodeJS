import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LivrosService } from '../../../services/livros.service';

@Component({
  selector: 'system-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit, AfterViewInit {

  livros:any = [];  
  generos:String[]= [];
  filtro:String = "";
  notFoundFiltro:boolean = false;

  constructor(private _livrosService: LivrosService) { }

  ngOnInit() {
    this.livros = this._livrosService.getLivros();     
    this.generos = this._livrosService.getGeneros();
  }

  ngAfterViewInit(){
  }  

  onFiltrarLivro(){    
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }else{      
      return this.livros.filter((liv) => {
        if((<String>liv.tit).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ){                              
          return true;
        }else{                                
          return false;                    
        }
      });                   
    }     
    
  }//filtarlivros()  


}
