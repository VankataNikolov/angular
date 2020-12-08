import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { LoginComponent } from './login/login.component';
import { NewGameComponent } from './new-game/new-game.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
      path: 'user',
      canActivateChild: [
        AuthGuard
      ],
      children: [
        {
          path: 'register',
          component: RegisterComponent,
          data: {
            isLogged: false,
            noNavigation: true
          },
        },
        {
          path: 'login',
          component: LoginComponent,
          data: {
            isLogged: false
          },
        },
        {
          path: 'newgame',
          component: NewGameComponent,
          data: {
            isLogged: true
          },
        }
      ]
    }
  ];
  
  export const UserRoutingModule = RouterModule.forChild(routes);