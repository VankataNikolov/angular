import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { find } from 'rxjs/operators';
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

  loadDetails(title: string): Observable<IArticle>{
    title = title.toLowerCase();
    return from(this.articles).pipe(
        find(a => a.title.toLowerCase() === title)
      );

  }
}
