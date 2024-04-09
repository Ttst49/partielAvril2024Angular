import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/GlobalConstants";

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private http: HttpClient) { }

  addToCart(id:string) {
    this.http.get(GlobalConstants.baseUrl+"product/add/"+id).subscribe({
      next(data){
        console.log(data);
      }
    })
  }

  getData(id: string) {
    return this.http.get(GlobalConstants.baseUrl+"product/show/"+id)
  }
}
