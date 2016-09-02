import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  user = {
    password: '',
    passconf: '', 
    username: ''
  }
  error = {
    message: '',
    isError: false,
    display: "none"
  }
  isPasswordMismatch = false
  isPasswordShort = false

  constructor( private userService:UserService ) { }
  ngOnInit() { }
  userRegister(event, user, password, passconfirm) {    
    event.preventDefault()
    if(this.validatePassMatch(password, passconfirm)){
      this.isPasswordMismatch = false
      this.error.isError = false
      console.log("password match");
      
    } else {
      console.log("pas mismatch");
      this.isPasswordMismatch = true
      this.error.isError = true
      this.error.message = "Password Mismatch"
      
    }
    this.userService.registerUser({ user, password})
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log(error);
        }
      )
  }
  validatePass(){
    if(this.validatePassMatch(this.user.password, this.user.passconf)){
      console.log(this.user.passconf);
      
      console.log("pass matching");
    }
    console.log("validate");
    
  }
  validatePassMatch(pass: String, passconf: String) {
    return pass === passconf
  }
  validatePassLength(pass: String) {
    return pass.length >= 6
  }
}
