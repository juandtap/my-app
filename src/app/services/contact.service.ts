import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts : Contact[] = [];
  constructor() { }

  save(contact: Contact){
    this.contacts.push(contact)
  }

  getList(){
    return this.contacts
  }
}
