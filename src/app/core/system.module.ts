import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

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
  ],
  providers: [],
  exports: [
    SystemComponent,    
  ]
})
export class SystemModule { }