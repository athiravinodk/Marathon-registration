import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/users';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 valuesArray: any;
  constructor(private http: HttpClient) { }

  // getData(key: string) {
  //   return JSON.parse(localStorage.getItem(key) as string);
  // }

  getData() {
    // this.http.get<User>('/api/User/get').subscribe((response: any) => {
    // });
    this.http.get<User>('/api/User/get').subscribe((response: any) => {
      this.valuesArray = response;
    });
  }
  // setData(key: string, value: any) {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }

  // postData(){
  //   this.http.post('/api/User/add', this.data).subscribe((response: any) => {
  //     console.log(response);
  //   });
  // }

  
}
