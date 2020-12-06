import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/user/user.service';
import { tokens } from '../../shared/constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  tokens = tokens;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService) { }

  get isLogged(): boolean {
    return this.authService.getToken(this.tokens.user);
  }

  get userName(): string {
    return this.authService.getToken(this.tokens.name);
  }
  
  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }

}
