import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LivrosService } from '../livros/livros.service';

@Component({
  selector: 'system-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit, AfterViewInit {

  livros:any=[];
  locacoes=[
  {
    cliente:"gildo", 
    dataLocacao:new Date(15,3,2020),
    dataEntrega:new Date(26,4,2020),
    //livros:[''+this.livros[0].tit, ''+this.livros[1].tit]      
  },
  {
    cliente:"maria", 
    dataLocacao:new Date(10,1,2020),
    dataEntrega:new Date(20,2,2020),
    //livros:[this.livros[1].tit, this.livros[2].tit]      
  },
  {
    cliente:"joão", 
    dataLocacao:new Date(8,2,2020),
    dataEntrega:new Date(10,3,2020),
    //livros:[this.livros[1].tit, this.livros[2].tit, this.livros[0].tit]      
  }];

  primeiraLoc = 1;
  constructor(private _livroService: LivrosService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.livros = this._livroService.getLivros();    
  }

  ngAfterViewInit(){        
    const btnTitulos = this._elementRef.nativeElement.querySelectorAll('.btnTit');
    const divDesc = this._elementRef.nativeElement.querySelectorAll('.desc');
    
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

}
