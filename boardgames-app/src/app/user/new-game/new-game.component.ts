import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  isLoading = false;
  errorMessage = 'ok';

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: { title: string, image?: string, description: string }): void{
    this.userService.postGame(formValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/gamelist']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
  }
}
