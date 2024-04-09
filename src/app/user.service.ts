import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/GlobalConstants";
import {User} from "./user";
import {Router} from "@angular/router";
import {routes} from "./app.routes";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router:Router) { }


  registerUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"register",user)
      .subscribe({
        next(dataFromFetch){
          console.log(dataFromFetch);
        }
      })
    this.router.navigateByUrl("login").then()
  }

  loginUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"login_check",
      {
        "username":user.username,
        "password":user.password
          }
    )
      .subscribe({
        next(dataFromFetch:any){
          localStorage.setItem('bearerToken',dataFromFetch['token'])
          console.log(localStorage)
        }
      })
    this.router.navigateByUrl("home").then()
  }

}
