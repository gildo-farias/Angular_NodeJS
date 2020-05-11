import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioService } from 'src/services/usuario.service';

@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,    
  ],
  exports: [
    UsuariosComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuariosModule { }
