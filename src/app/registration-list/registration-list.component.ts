import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/users.service';
import { User } from '../shared/models/users';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  valuesArray: any = User;
  url = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.valuesArray = this.userService.getData();
  }


  onSelectImg(e: any, user: any) {
    const file: File = e.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      user.image = reader.result as string;
    };
    reader.readAsDataURL(file);
    if (user.image) {
      localStorage.setItem('image_$user.id', user.image);
    }
  }


  onSave(user: { id: number; image: any; time: any; }) {
    let data = JSON.parse(localStorage.getItem('users') as string);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === user.id) {
        data[i].time = user.time;
        data[i].image = user.image;
        break;
      }
    }
    localStorage.setItem('users', JSON.stringify(data));
  }

}

