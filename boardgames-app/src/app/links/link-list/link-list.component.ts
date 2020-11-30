import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/interfaces';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  linkList: ILink[];

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();

  }

}
