import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  propiedad:any;
  private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }

  
  sendMessage(body:any) : Observable<any> {
    // return this._http.post(`${this.baseUrl}/send-mail`, body);
    // return this._http.post(" https://dulce-alma-deco.herokuapp.com/send-mail", body);   
    // return this._http.post("/send-mail", body); //no se si anda con este endpoint
    return this._http.post(`${this.baseUrl}/send-mail`,body);

    }
 
  emailToNodemailer( body:any ): Observable<any> {
    return this._http.post(`${this.baseUrl}/order-note`,body);
    }
  
  sendMercadoPago( body:any ) : Observable <any> {
    return this._http.post(`${this.baseUrl}/payment`,body);
 
  }
  

  }

