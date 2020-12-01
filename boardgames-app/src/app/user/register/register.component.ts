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
  errorMessage = 'ok';

  constructor(private userService: UserService, private router: Router) { }

  submitFormHandler(formValue: {"email" : string, "password" : string, "name" : string}): void{
    this.userService.register(formValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/user/login']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
  }

}
