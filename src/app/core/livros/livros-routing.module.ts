import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosComponent } from './livros.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

const livrosRoutes: Routes = [         
    { path: '', component: LivrosComponent},    
    { path: 'novo', component: CadastroLivroComponent},      
    { path: ':cod', component: DetalheLivroComponent, children: [      
        { path: 'alterar', component: AlterarLivroComponent}, 
    ]}    
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}