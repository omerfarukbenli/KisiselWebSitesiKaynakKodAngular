import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient:HttpClient) { }


  private apiUrl = "https://localhost:7145/api/Helper";
  sendContactEmail(contact:Contact)
  {
    return this.httpClient.post(`${this.apiUrl}/SendContactEmail`, contact);
  }
}

