import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dbPath = "/contactos";
  contacts : Contact[] = [];
  contactRef:AngularFirestoreCollection<Contact>;
  //contact_shared : Contact = new Contact;
  constructor(private db: AngularFirestore) {
    this.contactRef = this.db.collection(this.dbPath)
   }

  save(contact: Contact){
    
    this.contacts.push(contact)
    console.log(this.contacts)
    this.create(contact)
    
  }

  getAll(){
    return this.contactRef.valueChanges()
  }

  create(contact : Contact): any{
    return this.contactRef.add({...contact})
  }
  
  update(id: string, data: any):Promise<void>{
    return this.contactRef.doc(id).update(data)
  }

  delete(id: string): Promise<any>{
    return this.contactRef.doc(id).delete()
  }

  // setContactToEdit(contact: Contact){
  //   this.contact_shared = contact
  //   console.log('contacto compartido :'+this.contact_shared.nombre)
  // }

  // getContactToEdit(){
  //     return this.contact_shared
  // }

  // updateContact(contact : Contact){
  //   let index = 0
  //   for (let c of this.contacts){
  //     if (c.cedula === contact.cedula){
  //       this.contacts[index] = contact
  //     }
  //     index++
  //   }
  // }

  // deleteContact(contact: Contact){
  //   let index = 0
  //   for (let c of this.contacts){
  //     if (c.cedula === contact.cedula){
  //       this.contacts.splice(index,1)
  //     }
  //     index++
  //   }
  // }

}
