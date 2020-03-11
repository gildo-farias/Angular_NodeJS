import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LivrosRoutingModule } from './livros-routing.module';

import { LivrosService } from './../../../services/livros.service';
import { LivrosComponent } from './livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { FormLivroComponent } from './form-livro/form-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';

@NgModule({
  declarations: [
    LivrosComponent,
    CadastroLivroComponent,
    DetalheLivroComponent,
    FormLivroComponent,
    AlterarLivroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LivrosRoutingModule
  ],
  exports:[
    LivrosComponent        
  ],
  providers:[
    LivrosService
  ]
})
export class LivrosModule { }
