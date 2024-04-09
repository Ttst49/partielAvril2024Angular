import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {initFlowbite} from "flowbite";
import {HomeComponent} from "./home/home.component";
import {Router} from "@angular/router";
import {GlobalConstants} from "./common/GlobalConstants";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'partielAvril2024';

  constructor(private router:Router) {
  }

  btnClick(name:string){
    this.router.navigateByUrl("/"+name).then(()=>{console.log("clicked")})
  }

  ngOnInit(){
    initFlowbite()
  }

  protected readonly GlobalConstants = GlobalConstants;
}

