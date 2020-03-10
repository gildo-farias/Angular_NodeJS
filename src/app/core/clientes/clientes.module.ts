import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';

import { ClientesService } from './../../../services/clientes.service';
import { ClientesComponent } from './clientes.component';

@NgModule({
  declarations: [
    ClientesComponent
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
