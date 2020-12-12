import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { cardEnter } from 'src/app/shared/animations.module';
import { IGame } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  animations: [cardEnter]
})
export class GameListComponent implements OnInit {

  pageSize = this.gameService.pageSize;
  pageSizeOptions = this.gameService.pageSizeOptions;
  currentPage = this.gameService.currentPage;
  count: number;

  gamesData: IGame[] = [];

  isLoading = false;

  errorMessage = '';

  constructor(private gameService: GameService) {

  }

  public handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.iterator(e.pageIndex, e.pageSize);
  }

  private iterator(page: number, pageSize: number) {
    this.isLoading = true;
    forkJoin([this.gameService.countGames(), this.gameService.loadPartial(page, pageSize)]).subscribe({
      next: (data) => {
        this.count = data[0][0].count;
        this.gamesData = data[1];
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    })
    // const end = (this.currentPage + 1) * this.pageSize;
    // const start = this.currentPage * this.pageSize;
    // const part = this.gamesData.slice(start, end);
  }

  ngOnInit(): void {
    // this.isLoading = true;
    // this.gameService.loadGames().subscribe({
    //   next: (data) => {
    //     this.gamesData = data;
    //     this.isLoading = false;
    //     this.iterator();
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isLoading = false;
    //   }
    // });
    this.iterator(this.gameService.currentPage, this.gameService.pageSize);
  }

}
