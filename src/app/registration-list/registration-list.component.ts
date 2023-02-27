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
  }

  // listItems() {
  //   this.valuesArray = this.userService.getUsers();
  //   console.log(this.valuesArray);
  // }

  
}
