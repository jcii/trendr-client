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

  constructor( private userService:UserService ) { }
  ngOnInit() { }
  userRegister(event, user, password, passconfirm) {
    console.log("now registering");
    
    event.preventDefault()
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
}
