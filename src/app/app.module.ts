import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemModule } from './core/system.module';
import { SystemService } from './../services/system.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

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
    SystemService,
    AuthGuard,
    AdminGuard,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
