import { Injectable } from '@angular/core';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) { }

  authUser(user: any){
    let userArray = [];
    if(localStorage.getItem('login')){
      userArray = this.userService.getData('login');
    }
    return userArray.find((p: {admin: string, password: number}) => p.admin === user.admin && p.password === user.password);
  }
}
// validate(){
    
//   this.loginService.Login(this.post.Name,this.post.Pass)
//   .subscribe(res=>{
//     console.log(res.UserName)
//     localStorage.setItem("ID",res.ID)
//     localStorage.setItem("Name",res.UserName)
//      this.router.navigate(['/user'])
//      .then(() => {
//        window.location.reload();
//      });
    
//   },error=>{
//     alert("Invalid Credentials")
//   }
//   )
// }
