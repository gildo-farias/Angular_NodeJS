import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocacaoRoutingModule } from './locacao-routing.module';

import { LocacaoService } from 'src/services/locacao.service';
import { LocacaoComponent } from './locacao.component';
import { CadastroLocacaoComponent } from './cadastro-locacao/cadastro-locacao.component';
import { ModalComponent } from './modal/modal.component';

import { LivrosService } from 'src/services/livros.service';
import { ClientesService } from 'src/services/clientes.service';
import { ErrosModule } from '../erros/erros.module';

@NgModule({
  declarations: [
    LocacaoComponent,
    CadastroLocacaoComponent,
    ModalComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    LocacaoRoutingModule,
    ErrosModule
  ],
  exports: [
    LocacaoComponent        
  ],
  providers: [
    LocacaoService,
    DatePipe,
    ClientesService,
    LivrosService
  ]
})
export class LocacaoModule { }
