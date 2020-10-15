import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private contacts: ContactsService) { }

  ngOnInit(): void {
  }

  submitForm(e) {
    //Work on getting the form to submit the data
    //POST method works on my personal backend API
    const person = {
      "name":"",
      "mobile": "",
      "email": ""
    }
    this.contacts.addContact(person).subscribe(res => console.log(res));
  }

}
