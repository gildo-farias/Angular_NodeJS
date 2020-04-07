import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [      
    { path: 'login', component: TelaLoginComponent },    
    { path: 'livros',
      loadChildren: () => import('./core/livros/livros.module').then(liv => liv.LivrosModule),
      canActivate : [AuthGuard]
    },
    { path: 'locacao',
      loadChildren: () => import('./core/locacao/locacao.module').then(loc => loc.LocacaoModule),
      canActivate : [AuthGuard]
    },
    { path: 'clientes',
      loadChildren: () => import('./core/clientes/clientes.module').then(cli => cli.ClientesModule),
      canActivate : [AuthGuard]
    },
    { path: 'usuarios',
      loadChildren: () => import('./core/usuarios/usuarios.module').then(usu => usu.UsuariosModule),
      canActivate : [AuthGuard],
      canActivateChild : [AdminGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}