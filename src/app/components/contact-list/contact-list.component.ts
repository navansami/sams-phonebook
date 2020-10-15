import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: [];

  constructor(private contacts: ContactsService) { }

  ngOnInit(): void {
    this.contacts.getContacts().subscribe(cont => {
      this.contactList = cont.data.contacts;
    })
  }
}
