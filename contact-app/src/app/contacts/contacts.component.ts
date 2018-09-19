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
    this.CONTACTS = [new Contact(1, 'Reyaz', 'Mr', '9912399123', '54321', '54321', 'reyaz@abc.com'),
    new Contact(2, 'Jithu', 'Mr', '9912312345', '12345', '12345', 'jithu@abc.com'),
    new Contact(3, 'Sahu', 'Mr', '9912399123', '56415', '56415', 'sahu@abc.com'),
    new Contact(4, 'Raju', 'Mr', '9912334343', '54321', '54321', 'raju@abc.com')];
    //Added 4 records
    this.id=4;
  }


  addContact() {
    debugger;
    let cont = [...this.CONTACTS];
    console.log(this.contact.id);
    if(this.contact.id == 0) {
      this.id += 1;
      this.contact.id = this.id;
      cont.push(this.contact); 
    } else {
      for(let i=this.CONTACTS.length-1; i>0; i--) {
        if(this.CONTACTS[i].id === this.id) {
          this.CONTACTS[i] = this.contact;
        }
      }
    }
    this.CONTACTS = cont;
    this.displayDialog = false;
  }
  
  addContactModal(){
    this.displayDialog = true;
    this.contact= new Contact(0,'','','','','','');
  }

  deleteContactModal(contact: Contact){
    this.CONTACTS = this.CONTACTS.filter((val,i) => i!= this.CONTACTS.indexOf(this.selectedContact))
  }

  editContactModal(contact: Contact) {
    this.displayDialog = true;
    this.contact = this.selectedContact;
  }

}
