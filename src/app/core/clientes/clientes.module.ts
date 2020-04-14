import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ErrosModule } from './../erros/erros.module';
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
    ClientesRoutingModule,  
    FormsModule,
    ErrosModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  exports: [
    ClientesComponent
  ],
  providers: [
    ClientesService,          
  ]
})
export class ClientesModule { }
