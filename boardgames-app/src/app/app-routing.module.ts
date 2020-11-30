import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { LinkListComponent } from './links/link-list/link-list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:"gamelist",
    component: GameListComponent
  },
  {
    path:"links",
    component: LinkListComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
