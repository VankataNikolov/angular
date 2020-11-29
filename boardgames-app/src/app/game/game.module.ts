import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GameListComponent } from './game-list/game-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GameComponent, GameListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports: [
    GameComponent,
    GameListComponent
  ]
})
export class GameModule { }
