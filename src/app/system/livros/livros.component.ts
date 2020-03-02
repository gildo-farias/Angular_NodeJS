import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { LivrosService } from './livros.service';

@Component({
  selector: 'system-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit, AfterViewInit {

  livros:any = [];  
  generos:String[]= [];

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


}
