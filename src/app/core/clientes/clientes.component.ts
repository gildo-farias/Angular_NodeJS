import { LocacaoService } from 'src/services/locacao.service';
import { Usuario } from 'src/model/usuario';
import { SystemService } from 'src/services/system.service';
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';
import { Subject, empty, Observable } from 'rxjs';
import { LocacaoJSON } from 'src/model/locacaoJSON';

@Component({
  selector: 'system-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(
    private _clientesService: ClientesService,    
    private _systemService:SystemService
  ) { }

  user:Usuario;
  listaClientes:Array<Cliente> = new Array;
  listaClientes$:Observable<Cliente[]>;
  
  filtro: String = "";  

  ngOnInit(): void {
    this.user = this._systemService.logger;
    this.onRefresh();    
  }  

  erro$ = new Subject<boolean>();
  onRefresh(){
    this.listaClientes$ = this._clientesService.list().pipe(
      catchError(erro => {        
        this.erro$.next(true);
        return empty;
      })
    );      
    this._clientesService.list().subscribe(data => {
      this.listaClientes = data;      
    });
  }

  onFiltrar(){        
    if(this.listaClientes.length==0 || this.filtro == undefined || this.filtro.trim() == ''){      
      return this.listaClientes;
    }else{      
      return this.listaClientes.filter((cli) => {
        if(
          (<String>cli.nome).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
          (<String>cli.snome).toLowerCase().indexOf(this.filtro.toLowerCase()) >=0          
        ){                              
          return true;
        }else{                                
          return false;                    
        }
      });                   
    }    

  }

}
