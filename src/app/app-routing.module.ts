import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomeComponent } from './core/home/home.component';
import { PaginaNaoEncontradaComponent } from './core/erros/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [                 
    { path: 'livros',
      loadChildren: () => import('./core/livros/livros.module').then(liv => liv.LivrosModule),
      canActivate : [AuthGuard],
      canLoad : [AuthGuard]
    },
    { path: 'locacao',
      loadChildren: () => import('./core/locacao/locacao.module').then(loc => loc.LocacaoModule),
      canActivate : [AuthGuard],
      canLoad : [AuthGuard]
    },
    { path: 'clientes',
      loadChildren: () => import('./core/clientes/clientes.module').then(cli => cli.ClientesModule),
      canActivate : [AuthGuard],
      canLoad : [AuthGuard]
    },
    { path: 'usuarios',
      loadChildren: () => import('./core/usuarios/usuarios.module').then(usu => usu.UsuariosModule),
      canActivate : [AuthGuard],
      canLoad : [AuthGuard],
      canActivateChild : [AdminGuard]
    },
    { path: 'login', component: TelaLoginComponent }, 
    { path: 'home', component: HomeComponent, canActivate : [AuthGuard]}, 
    { path: '', redirectTo: '/home', pathMatch: 'full'}, 
    { path: '**', component: PaginaNaoEncontradaComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}