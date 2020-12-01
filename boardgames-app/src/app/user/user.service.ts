import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser | null = null;

  get isLogged(): boolean { return !!this.currentUser; }

  headers = {
    'user-token': ''
  }

  constructor(private http: HttpClient) { }

  register(data: {"email" : string, "password" : string, "name" : string}): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, data);
  }

  login(data: {login: string, password: string}): Observable<IUser> {
    return this.http.post(`${apiUrl}/users/login`, data).pipe(
      tap((user: IUser) => {
        this.currentUser = user;
        this.headers['user-token'] = user["user-token"];
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${apiUrl}/users/logout`, {headers: this.headers}).pipe(
      tap(() => {
        this.currentUser = null;
        this.headers['user-token'] = '';
      })
    );
  }

  postGame(data: {title: string, image?: string, description: string}) {
    return this.http.post(`${apiUrl}/data/boardgames`, data, {headers: this.headers})
  }
}
