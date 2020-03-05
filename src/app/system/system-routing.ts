import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { CadastroLivroComponent } from './livros/cadastro-livro/cadastro-livro.component';
import { LivrosComponent } from './livros/livros.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { TelaLoginComponent } from '../tela-login/tela-login.component';


const SYSTEM_ROUTES: Routes = [    
    // { path: '', component: SystemComponent },
    { path: 'login', component: TelaLoginComponent },
    { path: '', component: LivrosComponent },
    { path: 'livros', component: LivrosComponent },
    { path: 'livros/:add', component: CadastroLivroComponent },
    { path: 'loca', component: LocacaoComponent },        
];

export const SystemRouting: ModuleWithProviders = RouterModule.forRoot(SYSTEM_ROUTES);

