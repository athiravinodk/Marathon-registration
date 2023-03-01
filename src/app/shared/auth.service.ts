import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private users = [
    { admin: 'admin', password: 'admin123' },
  ];
  constructor() { }

  authUser(user: { admin: string, password: string }): boolean {
    const authenticatedUser = this.users.find(u => u.admin === user.admin && u.password === user.password);
    if (authenticatedUser) {
      localStorage.setItem('adminUser', JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('adminUser') as string);
  }

  isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  logout() {
    localStorage.removeItem('adminUser');
  }
}






