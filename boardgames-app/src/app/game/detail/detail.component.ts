import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  game: IGame;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const gameID = this.route.snapshot.params.id;
    this.gameService.loadDetails(gameID).subscribe(game => {
      this.game = game;
    });
  }

}
