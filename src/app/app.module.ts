import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Auth0 module
import { AuthModule } from '@auth0/auth0-angular';
import { AuthbuttonComponent } from './components/authbutton/authbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    AuthbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-oe2drczj.us.auth0.com',
      clientId: 'bC4XXUvSkRfFPkVFgrVaRXVwxRczCuzn'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
