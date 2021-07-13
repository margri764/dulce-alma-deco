import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }



//   private createRequestOptions() {
//     let headers = new HttpHeaders({
//          "Accept": "pdf",
//          "Content-Type": "pdf"
        

//     })
//     return headers;
// }

//   generateInvoice(body){
//     let options = this.createRequestOptions();
//     return this.http.get("http://localhost:8080/invoice",{headers:options});
//   }
}
// {headers: options}