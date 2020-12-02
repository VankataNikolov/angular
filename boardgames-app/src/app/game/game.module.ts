import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GameListComponent } from './game-list/game-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [GameComponent, GameListComponent, DetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    MatPaginatorModule,
    UserModule,
    RouterModule
  ],
  exports: [
    GameComponent,
    GameListComponent
  ]
})
export class GameModule { }
