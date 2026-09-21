import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { ReadfilesjugadorComponent } from './components/readfilesjugador-component/readfilesjugador-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceJugadores } from './services/service.jugadores';

@NgModule({
  declarations: [App, HomeComponent, ReadfilesjugadorComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceJugadores],
  bootstrap: [App],
})
export class AppModule {}
