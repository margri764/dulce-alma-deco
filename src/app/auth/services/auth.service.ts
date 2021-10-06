import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Auth, AuthResponse, User } from '../../intefaces/auth';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!
  private _user: User;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor( private http: HttpClient ) { }

  // verificaAutenticacion(): Observable<boolean> {

  //   if ( !localStorage.getItem('token') ) {
  //     return of(false);
  //   }

  //   return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
  //             .pipe(
  //               map( auth => {
  //                 this._auth = auth;
  //                 return true;
  //               })
  //             );

  // }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;

    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( res => {
            // localStorage.setItem('token', res.token! );
            // this._user = {
            //   name: res.name,
            //   uid: res.uid,
            //   email: res.email
            // }

            return res.ok;
          }),
          catchError( err => of(false) )
        );

  }




  login( email: string, password: string ) {
   
    const url  = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( res => {
        if( res.ok ){
     
          localStorage.setItem('token', res.token );
          this._user = {
            name: res.name,
            uid: res.uid,
            email: res.email
          }
        }
      }),
      map(res => res.ok),
      // catchError( err => of(err.error.msg) )

      
    );
      
  }



  logout() {
    this._auth = undefined;
    localStorage.clear();
  }

}


