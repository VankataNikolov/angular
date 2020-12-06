import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/game/game.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  maxLen = 500;
  isLoading = false;
  errorMessage = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  submitFormHandler(formValue: { title: string, comment: string }) {
    this.isLoading = true;
    this.errorMessage = "";
    const gameID = this.route.snapshot.params.id;
    const dataObj = Object.assign(formValue, { gameID: gameID })
    this.userService.postComment(dataObj).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([`/game/detail/${gameID}`]);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
        setTimeout(() => { this.errorMessage = ""; }, 6000);
      }
    });
  }

}
