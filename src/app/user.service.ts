import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/GlobalConstants";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"register",user)
      .subscribe({
        next(dataFromFetch){
          console.log(dataFromFetch);
        }
      })
  }

  loginUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"login_check",user)
      .subscribe({
        next(dataFromFetch){
          localStorage.setItem('bearerToken',dataFromFetch["token"])
          console.log(localStorage)
        }
      })
  }

}
