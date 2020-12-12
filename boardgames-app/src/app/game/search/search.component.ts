import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { IGame } from 'src/app/shared/interfaces';
import { GameService } from '../game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild("input", { static: true }) input: ElementRef;

  games$: Observable<IGame[]>;

  constructor(private service: GameService) {}

  ngOnInit(): void {
    this.games$ = fromEvent<KeyboardEvent>(this.input.nativeElement, "keyup")
      .pipe(
        map(e => (e.target as HTMLInputElement).value.toLowerCase()),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((inputValue: string) => {
          if(inputValue){
            return this.service.getSearchList(inputValue);
          } else {
            return from([]);
          }
            
        })
      );
  }

}
