import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ReadfilesjugadorComponent } from './components/readfilesjugador-component/readfilesjugador-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "jugadores", component: ReadfilesjugadorComponent},
  {path: "personas", component: PersonasApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
