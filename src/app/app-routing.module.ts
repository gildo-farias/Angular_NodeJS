import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemComponent } from './system/system.component';
import { LocacaoComponent } from './system/locacao/locacao.component';
import { LivrosComponent } from './system/livros/livros.component';
import { CadastroLivroComponent } from './system/livros/cadastro-livro/cadastro-livro.component';




const routes: Routes = [
  // {path: '', component: SystemComponent},
  // {path: 'login', component: TelaLoginComponent}
];

// const SYSTEM_ROUTES: Routes = [    
//   // { path: '', component: SystemComponent },
//   { path: '', component: LivrosComponent },
//   { path: 'system/livros', component: LivrosComponent },
//   { path: 'system/livros/add', component: CadastroLivroComponent },
//   { path: 'system/loca', component: LocacaoComponent },    
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}