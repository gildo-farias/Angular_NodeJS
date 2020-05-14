import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { DeletarClienteComponent } from './deletar-cliente/deletar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { AdminGuard } from 'src/app/guards/admin.guard';

const clientesRoutes: Routes = [
  { path: 'novo', component: CadastroClienteComponent },
  { path: '', component: ClientesComponent,
    children: [     
      { path: ':cod', component: DetalheClienteComponent},
    ]
  },  
  { path: ':cod', canActivateChild:[AdminGuard],
    children: [
      { path: 'alterar', component: AlterarClienteComponent},  
      { path: 'deletar', component: DeletarClienteComponent},
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}