import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/GlobalConstants";

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {

  constructor(private router:Router) {
    if (!GlobalConstants.isLoggedIn()){
      router.navigateByUrl("login").then()
    }
  }
}
