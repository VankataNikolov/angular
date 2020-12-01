import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewGameComponent } from './new-game/new-game.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path: 'user',
      children: [
        {
          path: 'register',
          component: RegisterComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'newgame',
          component: NewGameComponent,
        }
      ]
    }
  ];
  
  export const UserRoutingModule = RouterModule.forChild(routes);