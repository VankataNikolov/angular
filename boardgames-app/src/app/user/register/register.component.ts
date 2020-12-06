import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isLoading = false;
  errorMessage = "";

  constructor(private userService: UserService, private router: Router) { }

  submitFormHandler(formValue: { "email": string, "password": string, "name": string }): void {
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.register(formValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/user/login']);
      },
      error: (err) => {
        if(err.error.message.includes('Duplicate') && err.error.message.includes('\'name\'')){
          this.errorMessage = 'User with this name exists';
        } else {
          this.errorMessage = err.error.message;
        }
        this.isLoading = false;
        setTimeout(() => { this.errorMessage = ""; }, 6000);
      }
    });
  }

}
