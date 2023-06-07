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

 
  // editar(contact: Contact){
  //   console.log("editar "+contact)
  //   let params: NavigationExtras = {
  //     queryParams:{
  //       contact: contact,
  //     }
  //   }

  //   this.router.navigate(['pages/contactform'], params)
  // }

  edit(contact: Contact){
    
    // console.log("envio el contacto "+contact.nombre+" "+contact.cedula+" "+contact.direccion)
    // this.contactService.setContactToEdit(contact)
    // this.router.navigate(['pages/editcontact'])
  }

  delete(contact: Contact){
    console.log("contacto a eliminar : "+contact.cedula)
    this.contactService.delete(contact.cedula)
  }
  

}
