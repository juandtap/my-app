import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts : Contact[] = [];
  contact_shared : Contact = new Contact;
  constructor() { }

  save(contact: Contact){
    this.contacts.push(contact)
  }

  getList(){
    return this.contacts
  }

  setContactToEdit(contact: Contact){
    this.contact_shared = contact
    console.log('contacto compartido :'+this.contact_shared.nombre)
  }

  getContactToEdit(){
      return this.contact_shared
  }

  updateContact(contact : Contact){
    let index = 0
    for (let c of this.contacts){
      if (c.cedula === contact.cedula){
        this.contacts[index] = contact
      }
      index++
    }
  }

  deleteContact(contact: Contact){
    let index = 0
    for (let c of this.contacts){
      if (c.cedula === contact.cedula){
        this.contacts.splice(index,1)
      }
      index++
    }
  }

}
