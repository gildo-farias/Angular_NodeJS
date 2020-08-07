import { LivrosService } from 'src/services/livros.service';
import { ClientesService } from 'src/services/clientes.service';
import { Cliente } from 'src/model/cliente';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/model/livro';
import { Locacao } from 'src/model/locacao';

@Component({
  selector: 'app-cadastro-locacao',
  templateUrl: './cadastro-locacao.component.html',
  styleUrls: ['./cadastro-locacao.component.scss']
})
export class CadastroLocacaoComponent implements OnInit {
  locacao:Locacao = new Locacao;
  valorLivro = 12.50;
  
  clienteLoca:Cliente;
  livrosLoca:Livro[];

  clientes:Cliente[];
  livros:Livro[];

  constructor(
    private _clientesService:ClientesService,
    private _livrosService:LivrosService,    
    ) { }

  ngOnInit(): void {    
    this.clienteLoca = new Cliente;
    this.livrosLoca = [];
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
    this.locacao.cliente = this.clienteLoca;
    this.locacao.livros = this.livrosLoca;    

    let data = new Date();
    this.locacao.dataLoca = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();

    this.locacao.dataDevo = this.dataDevolucao();

    this.locacao.valor = this.valorLivro * this.livrosLoca.length;
    this.locacao.multa = 0;
    this.locacao.valorTotal = 0;
    this.locacao.status = true;
  }

  dataDevolucao(){
    let d = 15 * this.livrosLoca.length;    
    let data = new Date();
    data.setDate(data.getDate()+d);    
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
  }

  locar(){   
    this.dadosLocacao();     
    if(this.locacao.cliente.id>0 && this.locacao.livros.length > 0){
      console.log(this.locacao);
    }    
  }

}
