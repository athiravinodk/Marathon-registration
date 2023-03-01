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
      id: new FormControl(),
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      mobilenum: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.regForm.valid) {
      console.log('submitted');
      let storedData = this.userService.getData('users');
      if (!storedData) {
        storedData = [];
      }
      let lastId = storedData.length > 0 ? storedData[storedData.length - 1].id : 0;
      let newId = lastId + 1;
      let formValueWithId = { ...this.regForm.value, id: newId };
      storedData.push(formValueWithId);
      this.userService.setData('users', storedData);
      this.regForm.reset({});
      this.message = true;
    } else {
      alert('Please fill all required fields!');
    }
  }

  removeMsg() {
    this.message = false;
  }
}

