import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  api_addr = "https://sams-contacts.herokuapp.com/api/contacts"; 
  httpHeaders = {
    "Content-Type": "application/json"
  }

  constructor(private http:HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<any>(this.api_addr);
  }

  addContact(person:any): Observable<any> {
    return this.http.post(this.api_addr, person,{ headers: this.httpHeaders })
  }
}
