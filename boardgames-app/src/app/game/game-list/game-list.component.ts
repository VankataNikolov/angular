import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  pageSize = 4;
  currentPage = 0;
  pageEvent: PageEvent;

  gamesData = [
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },{
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "ticket to ride",
      image: "https://i0.wp.com/boardgamedragons.com/wp-content/uploads/2012/01/IMG_89171.jpg",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    }
  ]

  games: any;

  constructor() { 
    
  }

  public handlePage(e: PageEvent): void {
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
    this.iterator();
  }

}
