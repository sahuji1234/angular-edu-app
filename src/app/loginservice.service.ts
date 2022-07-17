import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {
   
  private baseUrl="http://localhost:9192/login";



  constructor(private httpClient:HttpClient) { }


  userLogin(user:User):Observable<any>{
    
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
       responseType: 'text'
  });

  let options = {
    headers: httpHeaders
  }; 

    return this.httpClient.post(`${this.baseUrl}`,user,options);
  }


}
