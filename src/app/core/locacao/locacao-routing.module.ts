import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacaoComponent } from './locacao.component';

const locacaoRoutes: Routes = [         
    { path: 'locacao', component: LocacaoComponent },             
];

@NgModule({
  imports: [RouterModule.forChild(locacaoRoutes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule {}