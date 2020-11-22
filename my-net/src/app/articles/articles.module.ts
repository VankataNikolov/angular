import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesService } from './articles.service';
import { DetailsListComponent } from './details-list/details-list.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleComponent,
    DetailsListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ArticleListComponent,
    ArticleComponent,
    DetailsListComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
