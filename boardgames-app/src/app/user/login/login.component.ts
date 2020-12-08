import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading = false;
  errorMessage = "";

  constructor(
    private userService: UserService,
    private router: Router) { }

  submitFormHandler(formValue: { email: string, password: string }): void{
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.login({login: formValue.email, password: formValue.password}).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        let message = err.error.message;
        if(message.includes("login") && message.includes("Invalid")){
          message = message.replace("login", "email");
        }
        this.errorMessage = message;
        this.isLoading = false;
        setTimeout(() => { this.errorMessage = ""; }, 6000);
      }
    });
  }

}
