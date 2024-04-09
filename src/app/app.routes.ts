import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {ScanComponent} from "./scan/scan.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";

export const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "scan", component: ScanComponent,

  },
  {
    path: "login", component: UserManagerComponent
  },
  {
    path: "logout", component: UserManagerComponent
  },
  {
    path: "register", component: UserManagerComponent
  },
  {
    path: "profile", component: ProfileComponent
  }
];
