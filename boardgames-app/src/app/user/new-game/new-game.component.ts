import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { IPostGame } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  isLoading = false;
  errorMessage = "";

  maxLen = 500;

  constructor(
    private userService: UserService,
    private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: IPostGame): void{
    this.isLoading = true;
    this.errorMessage = "";
    formValue.title = formValue.title.toLowerCase();
    this.userService.postGame(formValue).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/game/list']);
      },
      error: (err) => {
        if(err.error.message.includes("Duplicate")){
          this.errorMessage = 'This game is already added !';
        } else {
          this.errorMessage = err.error.message;
        }
        this.isLoading = false;
        setTimeout(() => { this.errorMessage = ""; }, 6000);
      }
    });
  }
}
