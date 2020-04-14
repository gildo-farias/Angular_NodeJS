import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosComponent } from './livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { DeletarLivroComponent } from './deletar-livro/deletar-livro.component';

import { AdminGuard } from 'src/app/guards/admin.guard';
import { ConfirmarSaidaGuard } from 'src/app/guards/confirmar-saida.guard';

const livrosRoutes: Routes = [           
  { path: '', component: LivrosComponent,
    children: [
      { path: 'novo', component: CadastroLivroComponent}
    ]
  },
    
  { path: ':cod', component: DetalheLivroComponent, canActivateChild:[AdminGuard], 
    children: [     
      { path: 'alterar', component: AlterarLivroComponent, canDeactivate: [ConfirmarSaidaGuard]},
      { path: 'deletar', component: DeletarLivroComponent}
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(livrosRoutes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}