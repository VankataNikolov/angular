import { Injectable } from '@angular/core';
import { ILink } from '../shared/interfaces';
import { linkList } from '../shared/data/links'

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  getLinks(): ILink[]{
    return linkList;
  }
}
