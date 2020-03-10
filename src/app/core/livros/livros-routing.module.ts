import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosComponent } from './livros.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';

const livrosRoutes: Routes = [         
    { path: 'livros', component: LivrosComponent},    
    { path: 'livro/:cod', component: DetalheLivroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}