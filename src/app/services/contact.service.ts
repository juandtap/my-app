import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';
import { idToken } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dbPath = "/contactos";
  contacts : Contact[] = [];
  contactRef:AngularFirestoreCollection<Contact>;
  
  constructor(private db: AngularFirestore) {
    this.contactRef = this.db.collection(this.dbPath)
  }

// nuevos metodos para guardar en firebase

  save(contact: Contact){
    
    this.contacts.push(contact)
    console.log(this.contacts)
    contact.uid = this.db.createId()
    this.create(contact)
    
  }

  getAll(){
    return this.contactRef.valueChanges()
  }

  create(contact : Contact): any{
    return this.contactRef.doc(contact.uid).set({... contact})
  }
  
  update(id: string, data: any):Promise<void>{
    return this.contactRef.doc(id).update(data)
  }

  delete(id: string): Promise<void>{
    
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
