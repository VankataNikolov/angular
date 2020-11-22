import { Injectable } from '@angular/core';
import { IArticle } from './articleInterface';
import { articlesList } from './data/articles';

@Injectable()
export class ArticlesService {

  imgurl: string = "../../assets/images/youtube.jpeg"

  articles: IArticle[] = articlesList;

  constructor() { }

  loadArticles(){
    return this.articles;
  }
}
