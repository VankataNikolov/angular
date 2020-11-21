import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesService } from './articles.service';



@NgModule({
  declarations: [ArticleListComponent, ArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleListComponent, ArticleComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
