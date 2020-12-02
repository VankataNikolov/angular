import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = 'ok';

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: { email: string, password: string }): void{
    this.isLoading = true;
    this.userService.login({login: formValue.email, password: formValue.password}).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
  }

}
