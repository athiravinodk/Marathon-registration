import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123' },
  ];
  constructor() { }

  authUser(user: User): boolean {
    const authenticatedUser = this.users.find(u => u.username === user.username && u.password === user.password);
    if (authenticatedUser) {
      localStorage.setItem('currentUser', JSON.stringify(authenticatedUser.username));
      return true;
    }
    return false;
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






