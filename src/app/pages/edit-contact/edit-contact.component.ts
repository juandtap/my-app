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
      //this.contact = this.contactService.getContactToEdit()
    }

    editar(contact : Contact){
      //this.contactService.updateContact(contact)
      this.router.navigate(['pages/contactlist'])
    }
}
