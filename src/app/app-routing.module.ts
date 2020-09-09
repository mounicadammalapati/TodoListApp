import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {WeatherComponent} from './weather/weather.component';
import {TodolistComponent} from './todolist/todolist.component';


const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'weather',component:WeatherComponent},
  {path:'todolist',component:TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MenuComponent];
