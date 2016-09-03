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
  public userExists: boolean

  ngOnInit() { 
    this.user = {
      username: '',
      password: '',
      passconf: ''
    }
  }
  constructor(private _userService:UserService, private _router: Router ) { }
  userRegister(user: User, isValid: boolean) { 
    delete user.passconf   
    this._userService.registerUser(user)
      .subscribe(
        response => {
          this._router.navigate(['/login'])
        },
        error => {
          console.log(error);
        }
      )
  }
  checkUsername(username) {
    this._userService.checkIfUserExists(username)
      .subscribe(
        res => {
          res.json().length > 0 ? this.userExists = true : this.userExists = false
        },
        error => {
          console.log(error)
        }
      )
  }
  goToLogin(event){
    this._router.navigate(['/login'])
  }
}
