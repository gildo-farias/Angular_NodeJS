import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { LivrosModule } from './livros/livros.module';

import { SystemComponent } from './system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { LocacaoComponent } from './locacao/locacao.component';

@NgModule({
  declarations: [
    SystemComponent,
    NavbarComponent,
    SidebarComponent,    
    LocacaoComponent,        
  ],
  imports: [    
    CommonModule,
    AppRoutingModule,
    LivrosModule          
  ],
  providers: [],
  exports: [
    SystemComponent
  ]
})
export class SystemModule { }
