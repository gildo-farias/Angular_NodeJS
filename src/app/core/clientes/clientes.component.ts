import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';

@Component({
  selector: 'system-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private _clientesService: ClientesService) { }

  listaClientes:Array<Cliente> = new Array;

  ngOnInit(): void {    
    for (let index = 0; index < 5; index++) {
      this.listaClientes.push(this._clientesService.getClientes());
    }
    
  }  

}
