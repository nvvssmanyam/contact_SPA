import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
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
  response;
  id = 0;

  constructor(private http: Http) { };
  selectedContact:Contact;

  ngOnInit() {
    this.hideElement=true;
    this.getData().subscribe((data) => {
      this.CONTACTS = data;
    });
    this.id=5;
  }


  addContact() {
    let cont = [...this.CONTACTS];
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

  getData() {
    return this.http.get("./assets/data/data.json")
        .map((res:Response) => res.json());
  }

}
