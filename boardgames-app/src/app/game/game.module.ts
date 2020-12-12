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
import { CommentListComponent } from './comment-list/comment-list.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    DetailComponent,
    CommentListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    MatPaginatorModule,
    RouterModule,
    UserModule
  ],
  exports: [

  ]
})
export class GameModule { }
