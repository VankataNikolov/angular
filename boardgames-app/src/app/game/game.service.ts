import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth.service';
import { IComment, IGame } from '../shared/interfaces';
import { tokens } from '../shared/constants'


@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiUrl: string = environment.baseUrl;
  tokens = tokens;


  constructor(
    private http: HttpClient
    ) { }

  loadGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(`${this.apiUrl}/data/boardgames`);
  }

  loadDetails(data: string): Observable<IGame>{
    return this.http.get<IGame>(`${this.apiUrl}/data/boardgames/${data}`);
  }

  loadComments(data: string): Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.apiUrl}/data/comments?where=gameID%3D%27${data}%27`);
  }


}
