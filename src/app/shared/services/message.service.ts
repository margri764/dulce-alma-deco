import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public buy : boolean;

  private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }

  
  sendMessage(body:any) : Observable<any> {
    // return this._http.post(`${this.baseUrl}/send-mail`, body);
    // return this._http.post(" https://dulce-alma-deco.herokuapp.com/send-mail", body);   
    // return this._http.post("/send-mail", body); //no se si anda con este endpoint
    return this._http.post( "/api/send-mail", body );
  };
 
  emailToNodemailer( body:any ): Observable <any> {
    console.log(this.buy);
    let params = new HttpParams().set("buy", this.buy);
    // return this._http.post(`${this.baseUrl}/api/order-note`, body, {params} );

    return this._http.post('/api/order-note', body, {params} );
  };
  
  sendMercadoPago( body:any ) : Observable <any> {
    return this._http.post('/api/payment',body);
    // return this._http.post(`${this.baseUrl}/api/payment`,body);
 
  };
  

  }

