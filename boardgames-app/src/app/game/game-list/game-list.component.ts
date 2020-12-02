import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IGame } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  pageSize = 4;
  currentPage = 0;

  gamesData: IGame[] = [];

  games: IGame[] = [];

  isLoading = false;

  errorMessage = '';

  constructor(private gameService: GameService) { 
    
  }

  public handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.gamesData.slice(start, end);
    this.games = part;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.gameService.loadGames().subscribe({
      next: (data) => {
        this.gamesData = data;
        this.isLoading = false;
        this.iterator();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
    this.iterator();
  }

}
