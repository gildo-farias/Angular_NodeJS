import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { SystemComponent } from './system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    SystemComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,            
  ],
  imports: [    
    CommonModule,
    AppRoutingModule,       
    HttpClientModule
  ],
  providers: [],
  exports: [
    SystemComponent,    
  ]
})
export class SystemModule { }