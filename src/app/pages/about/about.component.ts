import { Component } from '@angular/core';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    contactList : Contact[] = []
    columnsNames : String[] = ['Cedula', 'Nombre', 'Direccion']
    constructor(private contactService: ContactService){
      this.contactList = this.contactService.getList()
    }
}
