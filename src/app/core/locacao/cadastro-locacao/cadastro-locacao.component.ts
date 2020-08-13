import { Router } from '@angular/router';
import { LocacaoService } from 'src/services/locacao.service';
import { LivrosService } from 'src/services/livros.service';
import { ClientesService } from 'src/services/clientes.service';
import { Cliente } from 'src/model/cliente';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/model/livro';
import { LocacaoJSON } from 'src/model/locacaoJSON';
import { Locacao } from 'src/model/locacao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cadastro-locacao',
  templateUrl: './cadastro-locacao.component.html',
  styleUrls: ['./cadastro-locacao.component.scss']
})
export class CadastroLocacaoComponent implements OnInit {
  locacaoJSON:LocacaoJSON = new LocacaoJSON;
  valorLivro = 12.50;
  
  clienteLoca:Cliente = new Cliente();
  livrosLoca:Livro[];

  clientes:Cliente[];
  livros:Livro[];

  constructor(
    private _locacaoService:LocacaoService,    
    private _clientesService:ClientesService,
    private _livrosService:LivrosService,    
    private _dataPipe: DatePipe,
    private _router: Router
  ) { }

  ngOnInit(): void {        
    this.livrosLoca = [];
    this.locacaoJSON.locacao = new Locacao();
    this._clientesService.list().subscribe(data => this.clientes = data);
    this._livrosService.list().subscribe(data => this.livros = data);
  }  

  escolherCli(cliente){        
    this.clienteLoca = cliente;
    document.getElementById('closeModalCli').click();  
  }
  escolherLiv(livro){           
    if(this.livrosLoca.length<3){
      this.livrosLoca.push(livro);      
      if(this.livrosLoca.length==3)
      document.getElementById('closeModalLiv').click();              
    }
    this.dadosLocacao();
  }
  removerLiv(index){           
    if(this.livrosLoca.length>0){
      this.livrosLoca.splice(index,1);
    }
    this.dadosLocacao();
  }

  dadosLocacao(){     
    this.locacaoJSON.cliente = this.clienteLoca;
    this.locacaoJSON.livros = this.livrosLoca;    

    this.locacaoJSON.locacao.id_cliente = this.clienteLoca.id;
    let data = new Date();
    this.locacaoJSON.locacao.dataLoca = `${data.getFullYear()}-${(data.getMonth()+1)}-${data.getDate()}`;
    this.locacaoJSON.locacao.dataLoca = this._dataPipe.transform(this.locacaoJSON.locacao.dataLoca,'yyyy-MM-dd');    
    this.locacaoJSON.locacao.dataDevo = this.dataDevolucao();
    this.locacaoJSON.locacao.valor = this.valorLivro * this.livrosLoca.length;
    this.locacaoJSON.locacao.multa = 0;
    this.locacaoJSON.locacao.valorTotal = this.locacaoJSON.locacao.valor.valueOf() + this.locacaoJSON.locacao.multa.valueOf();    
    this.locacaoJSON.locacao.status = true;
  }

  dataDevolucao(){    
    let data = new Date();
    data.setDate(data.getDate() + (15 * this.livrosLoca.length));    
    let str = `${data.getFullYear()}-${(data.getMonth()+1)}-${data.getDate()}`;    
    return this._dataPipe.transform(str, 'yyyy-MM-dd');    
  }

  locar(){   
    this.dadosLocacao();     
    if(this.locacaoJSON.cliente.id>0 && this.locacaoJSON.livros.length > 0){
      this._locacaoService.create(this.locacaoJSON).subscribe(data => {
        this._router.navigate(['/locacao']);
      });
    }else{
      alert('VALORES VAZIOS');
    }   
  }

}
