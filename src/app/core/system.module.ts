import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { LivrosModule } from './livros/livros.module';
import { LocacaoModule } from './locacao/locacao.module';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { SystemComponent } from './system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SystemComponent,
    NavbarComponent,
    SidebarComponent,        
  ],
  imports: [    
    CommonModule,
    AppRoutingModule,
    LivrosModule,
    LocacaoModule,
    ClientesModule,
    UsuariosModule,              
  ],
  providers: [],
  exports: [
    SystemComponent,    
  ]
})
export class SystemModule { }
