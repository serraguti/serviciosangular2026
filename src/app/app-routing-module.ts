import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ReadfilesjugadorComponent } from './components/readfilesjugador-component/readfilesjugador-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "jugadores", component: ReadfilesjugadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
