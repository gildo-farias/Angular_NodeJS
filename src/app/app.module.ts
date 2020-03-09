import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemModule } from './core/system.module';
import { SystemService } from './../services/system.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent   
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    SystemModule,    
    NgbModule, 
  ],
  providers: [
    SystemService     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
