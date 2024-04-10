import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/GlobalConstants";
import {FullProduct} from "./full-product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }


  getCart(){
    this.http.get(GlobalConstants.baseUrl+"cart/json")
      .subscribe({
        next:(data)=>{
          console.log(data)
        }
      })
  }

  validateCart(cart:FullProduct[]){
    this.http.post(GlobalConstants.baseUrl+"cart/validate", {"cart":cart,"user":GlobalConstants.user})
      .subscribe({
        next:(data)=>{
          console.log(data)
        }
      })
  }

}
