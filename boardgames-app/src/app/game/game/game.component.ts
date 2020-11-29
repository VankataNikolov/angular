import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() description: string;

  hidden: boolean = false;
  isLogged: boolean = true;
  info = "show info";

  constructor() { }

  toggleHide(){
    this.hidden = !this.hidden;
    this.info = this.hidden ? "hide info" : "show info";
  }

  ngOnInit(): void {
  }

}
