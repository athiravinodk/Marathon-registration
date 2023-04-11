import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/users';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url = "http://localhost:800/api/User";
  constructor(private http: HttpClient) { }

  // getData(key: string) {
  //   return JSON.parse(localStorage.getItem(key) as string);
  // }

  getData() {
    return this.http.get<User[]>(this.base_url + '/get')
  }
  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  
}
