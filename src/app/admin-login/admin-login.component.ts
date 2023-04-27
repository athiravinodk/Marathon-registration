import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})


export class AdminLoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    // console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value).subscribe({
      
    })
    if (user) {
      console.log('Login Successful');
      this.router.navigate(['/registration-list']);
    } else {
      console.log('Login not successsful');
      alert('Incorrect admin or password');
    }
   }

}
