import { Injectable } from '@angular/core';
import { IArticleDetails } from './articleDetails';
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

  loadDetails(title: string): IArticleDetails[]{
    title = title.toLowerCase();
    return this.articles.find(a => a.title.toLowerCase() === title).details;
  }
}
