import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
    contact: Contact = new Contact
    constructor(private contactService: ContactService, private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contact = params['contactToEdit']
      }
    }

    update(contact : Contact){
      this.contactService.update(contact.uid, contact)
      this.router.navigate(['pages/contactlist'])
    }
}
