import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [      
    { path: 'login', component: TelaLoginComponent },      
    { path: 'livros', loadChildren: () => import('./core/livros/livros.module').then(liv => liv.LivrosModule)},
    { path: 'locacao', loadChildren: () => import('./core/locacao/locacao.module').then(loc => loc.LocacaoModule)},
    { path: 'clientes', loadChildren: () => import('./core/clientes/clientes.module').then(cli => cli.ClientesModule)},
    { path: 'usuarios', loadChildren: () => import('./core/usuarios/usuarios.module').then(usu => usu.UsuariosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}