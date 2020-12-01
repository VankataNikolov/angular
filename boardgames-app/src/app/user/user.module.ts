import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewGameComponent } from './new-game/new-game.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, NewGameComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserModule { }
