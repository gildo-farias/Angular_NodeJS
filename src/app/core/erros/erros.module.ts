import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlertComponent } from './alert/alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NaoEncontradoComponent,    
    PaginaNaoEncontradaComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  exports: [
    NaoEncontradoComponent,
    AlertComponent,
  ]
})
export class ErrosModule { }
