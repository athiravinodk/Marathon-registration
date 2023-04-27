import { Injectable } from '@angular/core';
import { Admin } from './models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // private users = [
  //   { username: 'admin', password: 'admin123' },
  // ];
  constructor(private http: HttpClient) { }

  // authUser(user: Admin): boolean {
  //   const authenticatedUser = this.users.find(u => u.username === user.username && u.password === user.password);
  //   if (authenticatedUser) {
  //     localStorage.setItem('currentUser', JSON.stringify(authenticatedUser.username));
  //     return true;
  //   }
  //   return false;
  // }

  authUser(user: Admin) {
    return this.http.post('/api/User/login', user);
      // .toPromise()
      // .then(response => {
      //   // localStorage.setItem('currentUser', response.token);
      //   return true;
      // })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') as string);
  }

  isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}






