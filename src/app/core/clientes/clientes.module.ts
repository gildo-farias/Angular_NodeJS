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
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { DeletarClienteComponent } from './deletar-cliente/deletar-cliente.component';

@NgModule({
  declarations: [
    ClientesComponent,
    CadastroClienteComponent,
    FormClienteComponent,
    AlterarClienteComponent,
    DetalheClienteComponent,
    DeletarClienteComponent
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
