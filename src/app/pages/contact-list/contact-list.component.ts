import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contact_list : Contact[] = []
  listContactFire: any

  constructor(private contactService : ContactService, private router : Router){
    //this.contact_list = contactService.getAll()

   
    this.listContactFire = this.contactService.getAll()
  }

 
 

  edit(contact: Contact){
     
    console.log("editar "+contact)
    let params: NavigationExtras = {
      queryParams:{
        contactToEdit: contact,
      }
    }

    this.router.navigate(['pages/editcontact'], params)
  
    
  }

  delete(contact: Contact){
    console.log("contacto a eliminar : "+contact.cedula)
    this.contactService.delete(contact.uid)
  }
  

}
