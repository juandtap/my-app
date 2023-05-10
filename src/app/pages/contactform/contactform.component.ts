import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
    contact : Contact = new Contact();
    constructor(private contactService: ContactService, 
      private routeR: Router){
      let params = this.routeR.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contact = new Contact()
        this.contact = params['contact']
      }
    }

    guardar(){
       console.log(this.contact)
       this.contactService.save(this.contact)
       this.contact = new Contact()
    }


}
