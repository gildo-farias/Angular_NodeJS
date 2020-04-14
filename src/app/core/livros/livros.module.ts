import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { ErrosModule } from './../erros/erros.module';

import { LivrosService } from 'src/services/livros.service';
import { LivrosComponent } from './livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { FormLivroComponent } from './form-livro/form-livro.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { DeletarLivroComponent } from './deletar-livro/deletar-livro.component';
import { ConfirmarSaidaGuard } from 'src/app/guards/confirmar-saida.guard';

@NgModule({
  declarations: [
    LivrosComponent,
    CadastroLivroComponent,
    FormLivroComponent,
    DetalheLivroComponent,    
    AlterarLivroComponent, 
    DeletarLivroComponent
  ],
  imports: [
    CommonModule,    
    LivrosRoutingModule,  
    FormsModule,
    ErrosModule,
    ReactiveFormsModule,
    HttpClientModule              
  ],
  exports:[
    LivrosComponent        
  ],
  providers:[
    LivrosService,
    ConfirmarSaidaGuard
  ]
})
export class LivrosModule { }
