import {FullProduct} from "../full-product";

export class GlobalConstants{

  public static baseUrl = "https://partiel.thibautstachnick.com/api/"
  public static token = localStorage.getItem("bearerToken")
  public static user:any

  public static isLoggedIn(){
    return localStorage.getItem("bearerToken") != null
  }
  public static cart: FullProduct[] = []


  public static getTotalPrice(){
    let totalPrice = 0
    this.cart.forEach((product:any)=>{
      totalPrice += product.product.price*product.quantity
    })
    return totalPrice
  }
}
