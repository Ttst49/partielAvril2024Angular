import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/GlobalConstants";
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QrCodeService} from "../qr-code.service";
import {Product} from "../product";

LOAD_WASM().subscribe()
@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [
    NgxScannerQrcodeModule,
    JsonPipe,
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {

  qrCodeData:string|undefined = undefined
  qrCodeService:QrCodeService = inject(QrCodeService)
  product!:Product

  constructor(private router:Router) {
    if (!GlobalConstants.isLoggedIn()){
      router.navigateByUrl("login").then()
    }
  }


  setQrCodeValue(value?:string){
   if (value){
     this.qrCodeData = value
   }else {
     this.qrCodeData = undefined
   }
  }

  addToCart(url:string){
    let n = url.lastIndexOf('/');
    let result = url.substring(n + 1);

    this.qrCodeService.addToCart(result)
  }

  check(){
   console.log(this.product)
  }

  getData(url:string){
    let n = url.lastIndexOf('/');
    let result = url.substring(n + 1);
    this.qrCodeService.getData(result).subscribe({
      next:(productFrmFetch:any)=>{
         this.product = {
          id: productFrmFetch.id,
          name:productFrmFetch.name,
          price:productFrmFetch.price
        }

      }
    })
  }

}
