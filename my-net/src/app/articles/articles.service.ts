import { Injectable } from '@angular/core';
import { IArticle } from './articleInterface';

@Injectable()
export class ArticlesService {

  imgurl: string = "../../assets/images/youtube.jpeg"

  articles: IArticle[] = [
    {
      title: "Youtube",
      img: "../assets/images/youtube.jpg"
    },
    {
      title: "Angular",
      img: "../assets/images/angular.png"
    }
  ]

  constructor() { }

  loadArticles(){
    return this.articles;
  }
}
