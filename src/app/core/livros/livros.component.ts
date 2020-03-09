import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
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

  constructor(private _livrosService: LivrosService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.livros = this._livrosService.getLivros();     
    this.generos = this._livrosService.getGeneros();
  }

  ngAfterViewInit(){
    const divs = this._elementRef.nativeElement.querySelectorAll('.cardsCollapse');
    divs.forEach(div => {      
      div.dataset.target = "#cardN"+div.title;     
      div.setAttribute("aria-controls", "cardN"+div.title);      
    });

  }  

  // onPesquisar(event){
  //   this.filtro = event.target.value;
  // }

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
