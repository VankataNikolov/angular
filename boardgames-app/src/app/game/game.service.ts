import { Injectable } from '@angular/core';
import { gameList } from '../shared/data/games'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  loadGames(){
    return gameList;
  }
}
