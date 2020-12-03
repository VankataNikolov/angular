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
            noNavigation: true,
            title: 'USER REGISTER'
          },
        },
        {
          path: 'login',
          component: LoginComponent,
          data: {
            isLogged: false,
            title: 'USER LOGIN'
          },
        },
        {
          path: 'newgame',
          component: NewGameComponent,
          data: {
            isLogged: true,
            title: 'USER NEWGAME'
          },
        }
      ]
    }
  ];
  
  export const UserRoutingModule = RouterModule.forChild(routes);