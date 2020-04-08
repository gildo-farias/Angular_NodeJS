import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { NaoPermitidoComponent } from './nao-permitido/nao-permitido.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    NaoEncontradoComponent,
    NaoPermitidoComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NaoEncontradoComponent
  ]
})
export class ErrosModule { }
