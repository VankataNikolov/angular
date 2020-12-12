import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment, IGame } from '../shared/interfaces';
import { tokens } from '../shared/constants'


@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiUrl: string = environment.baseUrl;
  tokens = tokens;

  pageSize = 4;
  currentPage = 0;


  constructor(
    private http: HttpClient
    ) { }

  countGames(): Observable<any> {
    return this.http.get<Observable<any>>(
      `${this.apiUrl}/data/boardgames?property=Count(title)`
    ); 
  }

  loadPartial(newPage: number): Observable<IGame[]>{
    this.currentPage = newPage;
    return this.http.get<IGame[]>(
      `${this.apiUrl}/data/boardgames?pageSize=${this.pageSize}&offset=${this.currentPage * this.pageSize}&sortBy=created%20desc`
    );
  }

  loadGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(`${this.apiUrl}/data/boardgames`);
  }

  loadDetails(data: string): Observable<IGame>{
    return this.http.get<IGame>(`${this.apiUrl}/data/boardgames/${data}`);
  }

  loadComments(data: string): Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.apiUrl}/data/comments?where=gameID%3D%27${data}%27&sortBy=created%20desc`);
  }

  getSearchList(inputValue: string): Observable<IGame[]>{
    return this.http.get<IGame[]>(`${this.apiUrl}/data/boardgames?where=title%20like%20%27%25${inputValue}%25%27`);
  }

}
