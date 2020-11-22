import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticleDetails } from '../articleDetails';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss']
})
export class DetailsListComponent implements OnInit {

  details: IArticleDetails[];

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.articleService.loadDetails(this.route.snapshot.params.title)
      .subscribe(a => {
        if(a){
          this.details = a.details;
        }
      });
  }

}
