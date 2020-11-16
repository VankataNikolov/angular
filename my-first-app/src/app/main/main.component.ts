import { Component, OnInit } from '@angular/core';
import { ITheme } from '../interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  themes: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeList().subscribe(
      themeList => this.themes = themeList
    )
  }

}
