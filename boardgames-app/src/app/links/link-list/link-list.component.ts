import { Component, Input, OnInit } from '@angular/core';
import { listAnimation } from 'src/app/shared/animations.module';
import { ILink } from 'src/app/shared/interfaces';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
  animations: [listAnimation]
})
export class LinkListComponent implements OnInit {
  
  linkList: ILink[] = [];
  isLoading = false;
  errorMessage = "";

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.errorMessage = "";
    this.linkService.getLinks().subscribe({
      next: (data) => {
        this.linkList = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    })

  }

}
