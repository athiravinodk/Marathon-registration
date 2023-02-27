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
    // const userString = localStorage.getItem('users') as string;
    // const users = JSON.parse(userString);
    // return users || [];
  }
}
