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

  livros:any=[];
  locacoes=[
  {
    cliente:"gildo", 
    dataLocacao:new Date("5/3/2020"),
    dataEntrega:new Date("9/4/2020"),
    //livros:[''+this.livros[0].tit, ''+this.livros[1].tit]      
  },
  {
    cliente:"maria", 
    dataLocacao:new Date("12/3/2019"),
    dataEntrega:new Date("1/22/2020"),
    //livros:[this.livros[1].tit, this.livros[2].tit]      
  },
  {
    cliente:"joão", 
    dataLocacao:new Date("8/12/2020"),
    dataEntrega:new Date("10/8/2020"),
    //livros:[this.livros[1].tit, this.livros[2].tit, this.livros[0].tit]      
  }];

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
        if(loc.dataEntrega.toLocaleDateString() == data){                
          return true;            
        }else{                                
          return false;                    
        }
      });                         
    }            
  }//filtarLocaçoes

}
