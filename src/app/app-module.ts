import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { ReadfilesjugadorComponent } from './components/readfilesjugador-component/readfilesjugador-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceJugadores } from './services/service.jugadores';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    ReadfilesjugadorComponent,
    MenuComponent,
    PersonasApiComponent,
    CochesApiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServicePersonas,
    ServiceJugadores,
    provideHttpClient(),
  ],
  bootstrap: [App],
})
export class AppModule {}
