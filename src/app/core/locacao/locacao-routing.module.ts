import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroLocacaoComponent } from './cadastro-locacao/cadastro-locacao.component';

import { LocacaoComponent } from './locacao.component';

const locacaoRoutes: Routes = [         
    { path: '', component: LocacaoComponent },             
    { path: 'novo', component: CadastroLocacaoComponent},  
];

@NgModule({
  imports: [RouterModule.forChild(locacaoRoutes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule {}