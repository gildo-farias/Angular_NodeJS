import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';

@Component({
  selector: 'clientes-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  @Input() cliente: Cliente = new Cliente;

  constructor(private _clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cliente = this._clientesService.getClientes();
  }

}
