import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:800/api/User/get";
  constructor(private http: HttpClient) { }

  // getData(key: string) {
  //   return JSON.parse(localStorage.getItem(key) as string);
  // }

  getData(){
    return this.http.get<User[]>(this.url)
  }
  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
