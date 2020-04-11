import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const clientesRoutes: Routes = [              
    { path: '', component: ClientesComponent },     
    { path: 'novo', component: CadastroClienteComponent },     
];

@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}