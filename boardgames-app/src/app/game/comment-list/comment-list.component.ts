import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  commentList: IComment[] = [];

  isLoading: boolean = false;

  errorMessage: string = '';

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.errorMessage = '';
    const gameID = this.route.snapshot.params.id;
    this.gameService.loadComments(gameID).subscribe({
      next: (data) => {
        this.commentList = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
  }

}
