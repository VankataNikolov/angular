import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() gameId: string;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  info = "show info";

  constructor(private userService: UserService) { }

  showInfo(){
    
  }

  ngOnInit(): void {
  }

}
