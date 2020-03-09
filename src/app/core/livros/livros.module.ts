import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { LivrosService } from './../../../services/livros.service';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { LivrosComponent } from './livros.component';

@NgModule({
  declarations: [
    LivrosComponent,
    CadastroLivroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LivrosComponent        
  ],
  providers:[
    LivrosService
  ]
})
export class LivrosModule { }
