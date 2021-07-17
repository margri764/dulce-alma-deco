import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  propiedad:any;

  constructor(private _http: HttpClient) { }



  
  sendMessage(body:any) {
    return this._http.post("/send-mail", body);
    }
 

  sendMercadoPago(body:any){
    console.log(body)
    // let options = this.createRequestOptions();
    // return this._http.post("http://localhost:8080/checkout",body,{headers: options})
    return this._http.post("/checkout",body)
  
  }
  

  }

