import { Injectable } from '@angular/core';
import { ILink } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getLinks(): Observable<ILink[]>{
    return this.http.get<ILink[]>(`${this.apiUrl}/data/links`);
  }
}
