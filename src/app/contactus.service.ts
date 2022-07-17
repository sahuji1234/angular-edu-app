import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatcus } from './contatcus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private baseUrl="http://localhost:9192/contact-us";
  constructor(private httpClient:HttpClient) { }

  conatctUs(contactUs:Contatcus):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
       responseType: 'text'
  });

  let options = {
    headers: httpHeaders
  };

 return this.httpClient.post(`${this.baseUrl}`,contactUs,options)

  }
}
