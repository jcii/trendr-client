import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'
import { User } from '../interfaces/user.interface'
import { EqualValidator } from '../directives/equal-validatior.directive'

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [UserService],
  directives: [EqualValidator]
})

export class RegisterComponent implements OnInit {
  public user: User
  
  ngOnInit() { 
    this.user = {
      username: '',
      password: '',
      passconf: ''
    }
  }
  constructor(private _userService:UserService, private _router: Router ) { }
  userRegister(event, user: User, isValid: boolean) {    
    console.log(user, isValid)

    // event.preventDefault()
    // this.userService.registerUser(user)
    //   .subscribe(
    //     response => {
    //       console.log(response.json());
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   )
  }
  goToLogin(event){
    this._router.navigate(['/'])
  }
}
