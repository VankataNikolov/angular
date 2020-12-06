import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILogin, IUser, IRegister, IPostGame, IPostComment } from '../shared/interfaces';
import { AuthService } from '../shared/auth.service';
import { tokens } from '../shared/constants';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.baseUrl;
  tokens = tokens;

  currentUser: IUser | null = null;

  isLogged: boolean = false;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.isLogged = !!this.authService.getToken(this.tokens.user);
  }

  register(data: IRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, {
      "email": data.email, "password": data.password, "name": data.name});
  }

  login(data: ILogin): Observable<IUser> {
    return this.http.post(`${this.apiUrl}/users/login`, data).pipe(
      tap((user: IUser) => {
        this.currentUser = user;
        this.authService.setToken(this.tokens.user, user["user-token"]);
        this.authService.setToken(this.tokens.name, user.name);
        this.authService.setToken(this.tokens.id, user.ownerId)
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/logout`, { headers: this.authService.getToken(this.tokens.user) }).pipe(
      tap(() => {
        this.currentUser = null;
        this.authService.remove(this.tokens.user);
        this.authService.remove(this.tokens.name);
        this.authService.remove(this.tokens.id)
      })
    );
  }

  postGame(data: IPostGame): Observable<any> {
    data.title = data.title.toLowerCase();
    data[this.tokens.id] = this.authService.getToken(this.tokens.id);
    return this.http.post(`${this.apiUrl}/data/boardgames`, data, { headers: this.authService.getToken(this.tokens.user) });
  }

  postComment(data: IPostComment) {
    data[this.tokens.id] = this.authService.getToken(this.tokens.id);
    data[this.tokens.name] = this.authService.getToken(this.tokens.name);
    return this.http.post(`${this.apiUrl}/data/comments`, data, { headers: this.authService.getToken(this.tokens.user) })
  }
}
