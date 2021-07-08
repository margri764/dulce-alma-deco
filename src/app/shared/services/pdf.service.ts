import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  generateInvoice(body){
    return this.http.post("http://localhost:8081/invoice", body);
  }
}
