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
      gender: new FormControl('Select', [Validators.required]),
      mobilenum: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onSubmit() {
    console.log('submitted');
    const formValues = this.regForm.value;
    this.valuesArray.push(formValues); 
    localStorage.setItem('users', JSON.stringify(this.valuesArray));
    this.message = true;
    this.regForm.reset({});

  }
  removeMsg() {
    this.message = false;
  }

  // listItems() {
  //   this.valuesArray = this.userService.getUsers();
  //   console.log(this.valuesArray);
  // }
  getUsers(): any[] {
    const userString = localStorage.getItem('users') as string;
    const users = JSON.parse(userString);
    return users || [];
  }

}
