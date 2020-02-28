import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
