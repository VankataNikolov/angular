import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/shared/animations.module';
import { AuthService } from 'src/app/shared/auth.service';
import { IGame } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [fadeAnimation]
})
export class DetailComponent implements OnInit {

  
  game: IGame;
  isLoading: boolean = false;
  errorMessage: string = '';
  isFormOpen: boolean = false;

  get isLogged(){
    return this.authService.getToken('user-token');
  }


  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  toggleForm(){
    this.isFormOpen = !this.isFormOpen;
  }

  ngOnInit(): void {
    this.isLoading = true;
    const gameID = this.route.snapshot.params.id;
    this.gameService.loadDetails(gameID).subscribe({
      next: (data) => {
        this.game = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    });
  }

}
