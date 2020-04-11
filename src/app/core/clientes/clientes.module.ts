import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';

import { ClientesService } from './../../../services/clientes.service';
import { ClientesComponent } from './clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

@NgModule({
  declarations: [
    ClientesComponent,
    CadastroClienteComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule   
  ],
  exports: [
    ClientesComponent
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
