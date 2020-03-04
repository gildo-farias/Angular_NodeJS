import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LivrosComponent } from './livros/livros.component';
import { LivrosService } from './livros/livros.service';
import { LocacaoComponent } from './locacao/locacao.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SystemComponent,
    NavbarComponent,
    SidebarComponent,
    LivrosComponent,
    LocacaoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,        
  ],
  providers: [
    LivrosService
  ],
  exports: [
    SystemComponent
  ]
})
export class SystemModule { }
