import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemComponent } from './core/system.component';

const routes: Routes = [        
    // { path: '', component: SystemComponent },    
    { path: 'login', component: TelaLoginComponent },            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}