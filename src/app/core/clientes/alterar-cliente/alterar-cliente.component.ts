import { ClientesService } from 'src/services/clientes.service';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.scss']
})
export class AlterarClienteComponent implements OnInit {

  constructor(        
    private _route: ActivatedRoute,        
    private _clientesService: ClientesService
  ) { }

  codigo:number;
  cliente:Cliente;
  inscricao:Subscription[] = new Array;

  ngOnInit(): void {         
    this.inscricao.push(this._route.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];            
    }));        
    this.inscricao.push(this._clientesService.read(this.codigo).subscribe(data => this.cliente = data));
  }

  ngOnDestroy() {    
    this.inscricao.forEach(element => {
      element.unsubscribe;      
    });;   
    this.cliente = null;
  }

  formAlterado:boolean;
  escutandoMudanca(event){    
    this.formAlterado = event;
  }

  confirmarSaidaPagina():boolean{
    if(this.formAlterado){
      return confirm('DESEJA REALMENTE SAIR DA PAGINA?');      
    }   
    return true;
  }
}
