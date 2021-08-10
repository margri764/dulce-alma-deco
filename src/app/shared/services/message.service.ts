import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  propiedad:any;
  private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }

  
  sendMessage(body:any) {
    // return this._http.post(`${this.baseUrl}/send-mail`, body);
    // return this._http.post(" https://dulce-alma-deco.herokuapp.com/send-mail", body);   
    return this._http.post("/send-mail", body); //no se si anda con este endpoint
    }
 
  testMessage(body:any) {
    return this._http.post("http://localhost:8080/order-note",body);
    }
  
  sendMercadoPago(body:any){
    console.log(body)
    // let options = this.createRequestOptions();
    // return this._http.post("http://localhost:8080/checkout",body);
    return this._http.post("/checkout",body)
  
  }
  

  }

