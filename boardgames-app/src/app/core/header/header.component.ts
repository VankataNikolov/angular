import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService) { }

  get isLogged(): boolean {
    return this.authService.getToken('user-token');
  }

  get userName(): string {
    return this.authService.getToken('userName');
  }
  
  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(['/user/login']));
  }

}
