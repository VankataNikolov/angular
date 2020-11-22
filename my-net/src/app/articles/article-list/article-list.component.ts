import { Component, OnInit } from '@angular/core';
import { IArticle } from '../articleInterface';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticle[];

  constructor(public articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.loadArticles();
  }

}
