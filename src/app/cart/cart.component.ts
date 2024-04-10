import {Component, inject} from '@angular/core';
import {GlobalConstants} from "../common/GlobalConstants";
import {Router} from "@angular/router";
import {CartService} from "../cart.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService:CartService = inject(CartService)

  constructor(private router:Router) {
    if (!GlobalConstants.isLoggedIn()){
      router.navigateByUrl("login").then()
    }
    this.cartService.getCart()
  }

  protected readonly GlobalConstants = GlobalConstants;
  protected readonly Math = Math;
}
