import { SystemService } from './system.service';
import { SystemRouting } from './system-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SystemComponent } from './system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { LivrosComponent } from './livros/livros.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { CadastroLivroComponent } from './livros/cadastro-livro/cadastro-livro.component';

import { LivrosService } from './livros/livros.service';


@NgModule({
  declarations: [
    SystemComponent,
    NavbarComponent,
    SidebarComponent,
    LivrosComponent,
    LocacaoComponent,
    CadastroLivroComponent
  ],
  imports: [
    FormsModule,
    CommonModule,      
    SystemRouting  
  ],
  providers: [
    LivrosService,
    SystemService
  ],
  exports: [
    SystemComponent
  ]
})
export class SystemModule { }
