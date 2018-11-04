import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import {Contact} from './Contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  @ViewChild('contactForm') contactForm : NgForm;
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


  addContact(form: NgForm) {
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
    this.contactForm.control.markAsUntouched();
    this.contactForm.control.markAsPristine();
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
    return this.http.get("./assets/data/data.json").pipe(map((res:Response) => res.json()));
  }

}
