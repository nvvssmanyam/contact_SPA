import { Component, OnInit } from '@angular/core';
import {Contact} from './Contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title='Contact1';
  id = 1;
  contact = new Contact(0,'','','','','','');
  CONTACTS = [new Contact(this.id, 'Reyaz', 'Mr', '9912399123', '54321', '54321', 'reyaz@abc.com')];

  addContact() {
    this.id += 1;
    const contactEntry = new Contact(this.id, this.contact.name, this.contact.title, this.contact.phone, this.contact.ext, this.contact.fax, this.contact.email);
    this.CONTACTS.push(contactEntry);
    this.resetContact();
  }

  deleteContact(id: number) {
    for(let i=this.CONTACTS.length-1; i>0; i--) {
      if(this.CONTACTS[i].id === id) {
        this.CONTACTS.splice(i, 1);
      }
    }
  }

  resetContact() {
    this.contact.name = '';
    this.contact.title = '';
    this.contact.phone = '';
    this.contact.ext = '';
    this.contact.fax = '';
    this.contact.email = '';
  }

}
