import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacaoComponent } from './core/locacao/locacao.component';
import { CadastroLivroComponent } from './core/livros/cadastro-livro/cadastro-livro.component';
import { LivrosComponent } from './core/livros/livros.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemComponent } from './core/system.component';

const routes: Routes = [    
    // { path: '', component: SystemComponent },
    { path: '', component: SystemComponent },
    { path: 'login', component: TelaLoginComponent },    
    { path: 'livros', component: LivrosComponent },
    { path: 'livros/add', component: CadastroLivroComponent },
    { path: 'loca', component: LocacaoComponent },        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}