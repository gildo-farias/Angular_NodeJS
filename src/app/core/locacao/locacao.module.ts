import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
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
    LocacaoService,
    DatePipe
  ]
})
export class LocacaoModule { }
