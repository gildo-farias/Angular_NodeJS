import { ClientesService } from 'src/services/clientes.service';
import { Router } from '@angular/router';
import { LocacaoService } from 'src/services/locacao.service';
import { Observable, Subject, empty } from 'rxjs';
import { LocacaoJSON } from 'src/model/locacaoJSON';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { Locacao } from 'src/model/locacao';

@Component({
  selector: 'system-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {    
  today = new Date();    
  filtro: String;

  locacoes:LocacaoJSON[] = new Array;
  locacoes$:Observable<LocacaoJSON[]>;

  locacaoEscolha:LocacaoJSON;
  
  constructor(
    private _locacaoService:LocacaoService,    
    private _clientesService:ClientesService,    
    private _router: Router,    
  ) { }

  erro$ = new Subject<boolean>();
  ngOnInit() {             
    this.onRefresh();
  }

  verificarData(dataLoca){    
    let data = new Date(dataLoca);
    if(data.getTime() < this.today.getTime())      
    return true;           
  }

  onRefresh(){        
    this.locacaoEscolha = new LocacaoJSON();
    this.locacaoEscolha.locacao = new Locacao();
    this.locacoes$ = this._locacaoService.list().pipe(
      catchError(erro => {        
        this.erro$.next(true);
        console.error(erro);
        return empty;
      })
    );      

    this._locacaoService.list().subscribe(data => {
      this.locacoes = data;

      for (const loc of this.locacoes) {
        let data = new Date(loc.locacao.dataDevo.valueOf());
        if(data.getTime() < this.today.getTime()){
          let diasAtraso = Math.round((this.today.getTime().valueOf() - data.getTime().valueOf())/100000000);
          loc.locacao.multa = 5 * diasAtraso;
          loc.locacao.valorTotal = loc.locacao.valor.valueOf() + loc.locacao.multa.valueOf();
          this._locacaoService.update(loc).subscribe();
          loc.cliente.debito = loc.locacao.valorTotal.valueOf(); 
          loc.cliente.status = false;          
          this._clientesService.update(loc.cliente).subscribe();
        }      
      }

    });
    
  }

  onFiltrarLoca(){    
    if(this.locacoes.length==0 || this.filtro === undefined || this.filtro === null || this.filtro.trim() == ''){
      return this.locacoes;
    }else{      
      return this.locacoes.filter((loc) => {                         
        if(loc.locacao.dataDevo == this.filtro){
          return true;            
        }else{                                
          return false;                    
        }
      });                         
    }            
  }//filtarLocaçoes

  openCard(btn, id:String){    
    btn.dataset.target = '#'+id;    
  }

  receber(locacao:LocacaoJSON){
    this.locacaoEscolha = locacao;    
  }

  confirmaReceber(){
    this.locacaoEscolha.locacao.status = false;
    this._locacaoService.update(this.locacaoEscolha).subscribe( () => {
      this._router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this._router.navigate(['/locacao']);
      }); 
    });    
  }

}
