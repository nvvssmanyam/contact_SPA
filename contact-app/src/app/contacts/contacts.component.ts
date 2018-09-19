import { Component, OnInit } from '@angular/core';
import {Contact} from './Contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  CONTACTS: Contact[];
  contact = new Contact(0,'','','','','','');
  displayDialog: boolean;
  hideElement: boolean;
  id = 0;

  constructor() { };
  selectedContact:Contact;

  ngOnInit() {
    this.hideElement=true;
    this.CONTACTS = [new Contact(0, 'Reyaz', 'Mr', '9912399123', '54321', '54321', 'reyaz@abc.com')];
  }


  addContact() {
    debugger;
    let contacts = [...this.CONTACTS];
    if(this.id == 0) {
      this.id += 1;
      this.contact.id = this.id;
      //const contactEntry = new Contact(this.id, this.contact.name, this.contact.title, this.contact.phone, this.contact.ext, this.contact.fax, this.contact.email);
      contacts.push(this.contact); 
    } else {
      for(let i=this.CONTACTS.length-1; i>0; i--) {
        if(this.CONTACTS[i].id === this.id) {
          this.CONTACTS[i].name=this.contact.name;
          this.CONTACTS[i].title=this.contact.title;
          this.CONTACTS[i].phone=this.contact.phone;
          this.CONTACTS[i].ext=this.contact.ext;
          this.CONTACTS[i].fax=this.contact.fax;
          this.CONTACTS[i].email=this.contact.email;
        }
      }
    }
    this.CONTACTS = contacts;
    this.resetContact();
  }
  
  deleteContact(contact: Contact) {
    for(let i=this.CONTACTS.length-1; i>0; i--) {
      if(this.CONTACTS[i].id === contact.id) {
        this.CONTACTS.splice(i, 1);
      }
    }
  }
  
  addContactModal(){
    this.displayDialog = true;
    this.contact= new Contact(0,'','','','','','');
  }

  deleteContactModal(contact: Contact){
    alert();
    this.CONTACTS = this.CONTACTS.filter((val,i) => i!= this.CONTACTS.indexOf(this.selectedContact))
  }

  showContactModal(contact: Contact) {
    this.displayDialog = true;
    this.selectedContact = contact;
    this.contact.name = contact.name;
    this.contact.title = contact.title;
    this.contact.phone = contact.phone;
    this.contact.ext = contact.ext;
    this.contact.fax = contact.fax;
    this.contact.email = contact.email;
    console.log(this.selectedContact);
  }

  resetContact() {
    this.displayDialog = false;
    this.contact.id = 0;
    this.contact.name = '';
    this.contact.title = '';
    this.contact.phone = '';
    this.contact.ext = '';
    this.contact.fax = '';
    this.contact.email = '';
  }

}
