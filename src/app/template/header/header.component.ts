import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.scss'],
  styleUrls: ['../../app.component.scss','./header.component.scss',],
  
})
export class HeaderComponent {

  constructor(private router: Router){

  }

  addContact(){
    this.router.navigate(["pages/contactform"])

  }
}
