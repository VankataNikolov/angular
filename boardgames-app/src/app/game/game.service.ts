import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGame } from '../shared/interfaces';

const apiUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  loadGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(`${apiUrl}/data/boardgames`);
  }

  loadDetails(data: string): Observable<IGame>{
    return this.http.get<IGame>(`${apiUrl}/data/boardgames/${data}`);
  }
}
