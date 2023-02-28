import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  valuesArray: any[] = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.valuesArray = this.userService.getData('users');

  }

  saveData(user: { id: number; time: any; }) {
    console.log('submit');
    let data = JSON.parse(localStorage.getItem('users') as string);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === user.id) {
        data[i].time = user.time;
        break;
      }
    }
    localStorage.setItem('users', JSON.stringify(data));
  }
}

