import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILogin, IUser, IRegister, IPostGame, IPostComment } from '../shared/interfaces';
import { AuthService } from '../shared/auth.service';

const apiUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = 'user-token';

  currentUser: IUser | null = null;

  isLogged: boolean = false;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.isLogged = !!this.authService.getToken(this.token);
  }

  register(data: IRegister): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, {
      "email": data.email, "password": data.password, "name": data.name});
  }

  login(data: ILogin): Observable<IUser> {
    return this.http.post(`${apiUrl}/users/login`, data).pipe(
      tap((user: IUser) => {
        this.currentUser = user;
        this.authService.setToken(this.token, user["user-token"]);
        this.authService.setToken('userName', user.name);
        this.authService.setToken('ownerId', user.ownerId)
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${apiUrl}/users/logout`, { headers: this.authService.getToken(this.token) }).pipe(
      tap(() => {
        this.currentUser = null;
        this.authService.remove(this.token);
        this.authService.remove('userName');
        this.authService.remove('ownerId')
      })
    );
  }

  postGame(data: IPostGame): Observable<any> {
    data['ownerId'] = this.authService.getToken('ownerId');
    return this.http.post(`${apiUrl}/data/boardgames`, data, { headers: this.authService.getToken(this.token) });
  }

  postComment(data: IPostComment): Observable<any> {
    data['ownerId'] = this.authService.getToken('ownerId');
    return this.http.post(`${apiUrl}/data/comments`, data, { headers: this.authService.getToken(this.token) })
  }
}
