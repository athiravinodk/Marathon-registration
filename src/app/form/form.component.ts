import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  regForm!: FormGroup;
  message: boolean = false;
  valuesArray: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      mobilenum: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    console.log('submitted');
    let storedData = this.userService.getData('users');
    if (!storedData) {
      storedData = [];
    }
    storedData.push(this.regForm.value);
    this.userService.setData('users', storedData);
    this.message = true;
    this.regForm.reset({});
  }
  removeMsg() {
    this.message = false;
  }
}

