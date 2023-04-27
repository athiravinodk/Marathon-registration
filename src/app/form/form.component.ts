import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/users.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm!: FormGroup;
  message: boolean = false;
  valuesArray: any[] = [];
  constructor(private userService: UserService,
    private http: HttpClient) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required,Validators.pattern(/^\d+$/)]),
      gender: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.regForm.valid) {
      let data = {
        "FirstName": this.regForm.value.firstName,
        "LastName": this.regForm.value.lastName,
        "Age": parseInt(this.regForm.value.age), 
        "Gender": this.regForm.value.gender,
        "Category": this.regForm.value.category,
        "ContactNumber": this.regForm.value.contactNumber
      }
      this.http.post('/api/User/add', data ).subscribe((response: any) => {
        this.valuesArray = response;
      });
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

