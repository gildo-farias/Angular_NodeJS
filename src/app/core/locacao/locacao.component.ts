import { Locacao } from 'src/model/locacao';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'system-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {  
  private _filtro: Date;
  public get filtro(): Date {
    return this._filtro;
  }
  public set filtro(value: Date) {
    this._filtro = value;        
  }
  
  locacoes:Locacao[];

  primeiraLoc = 1;
  constructor(private _elementRef: ElementRef, private _datePipe: DatePipe) { }

  ngOnInit() {       
  }

  setIdsAccordion(){
    let btnTitulos = this._elementRef.nativeElement.querySelectorAll('.btnTit');
    let divDesc = this._elementRef.nativeElement.querySelectorAll('.desc');
    
    btnTitulos.forEach(tit => {      
      tit.dataset.target = "#" + tit.title;
      tit.setAttribute("aria-controls",tit.title);
    });
    divDesc.forEach(desc => {
      if(this.primeiraLoc>0){
        desc.classList.add("show");
        this.primeiraLoc = 0;
      }
      desc.setAttribute("aria-labelledby", desc.title);
    });     
  }

  // ngAfterViewInit(){      
  //   this.setIdsAccordion();    
  // }      
  ngAfterViewChecked(){    
    this.setIdsAccordion();          
  }  

  onFiltrarLoca(){    
    if(this.locacoes.length === 0 || this.filtro === undefined || this.filtro === null){
      return this.locacoes;
    }else{      
      return this.locacoes.filter((loc) => {
        let data = this._datePipe.transform(this.filtro,'dd/MM/yyyy');
        if(loc.dataLoca == data){
          return true;            
        }else{                                
          return false;                    
        }
      });                         
    }            
  }//filtarLocaçoes

}
