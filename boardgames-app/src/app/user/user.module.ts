import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewGameComponent } from './new-game/new-game.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NewGameComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MatFormFieldModule,
    SharedModule
  ],
  exports: [
    CommentComponent
  ]
})
export class UserModule { }
