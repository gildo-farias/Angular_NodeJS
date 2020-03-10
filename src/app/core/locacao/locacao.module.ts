import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocacaoRoutingModule } from './locacao-routing.module';

import { LocacaoService } from './../../../services/locacao.service';
import { LocacaoComponent } from './locacao.component';

@NgModule({
  declarations: [
    LocacaoComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    LocacaoRoutingModule    
  ],
  exports: [
    LocacaoComponent        
  ],
  providers: [
    LocacaoService
  ]
})
export class LocacaoModule { }
