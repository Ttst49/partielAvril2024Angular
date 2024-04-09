import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {UserService} from "../user.service";
import {User} from "../user";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-manager',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    FormsModule
  ],
  templateUrl: './user-manager.component.html',
  styleUrl: './user-manager.component.css'
})
export class UserManagerComponent {

  activeRoute:string
  givenUsername:string = ''
  givenPassword: string = ''

  constructor(protected router: Router,private userService:UserService) {
    this.activeRoute = router.url
    if (this.activeRoute=='/logout'){
      localStorage.removeItem('bearerToken')
      router.navigateByUrl("home").then()
    }
  }

  userEntityCreator(){
    let user:User = {
      username:this.givenUsername,
      password:this.givenPassword
    }
    return user
  }

  login(){
    this.userService.loginUser(this.userEntityCreator())
  }
  register(){
    this.userService.registerUser(this.userEntityCreator())
  }

}
