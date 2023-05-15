import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Contact } from 'src/app/domain/contact';
import { Location } from '@angular/common';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['../../app.component.scss', './right-side-bar.component.scss'],
})
export class RightSideBarComponent {
  contact: Contact = new Contact();

  // constructor(private contactService: ContactService,
  //   private router: Router){
  //   let params = this.router.getCurrentNavigation()?.extras.queryParams;
  //   if(params){
  //     console.log(params)
  //     this.contact = new Contact()
  //     this.contact = params['contact']
  //   }

  constructor(private contactService: ContactService) {}

  guardar() {
    console.log(this.contact);
    this.contactService.save(this.contact);
    this.contact = new Contact();
  }
}
