import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './game/detail/detail.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { LinkListComponent } from './links/link-list/link-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:"game/list",
    component: GameListComponent
  },
  {
    path:"game/detail/:id",
    component: DetailComponent
  },
  {
    path:"links",
    component: LinkListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
