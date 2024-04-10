import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/GlobalConstants";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private router:Router) {
    if (!GlobalConstants.isLoggedIn()){
      router.navigateByUrl("login").then()
    }
  }

    protected readonly GlobalConstants = GlobalConstants;
}
