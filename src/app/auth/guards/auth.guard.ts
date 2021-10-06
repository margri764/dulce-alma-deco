import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from '../../intefaces/auth';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate, CanLoad {

private _auth: Auth |undefined;

constructor( private authService: AuthService,
  private router: Router ){}


canActivate(): Observable<boolean> | boolean {
  return this.authService.validarToken()
          .pipe(
            tap( valid => {
              if ( !valid ) {
          alert('Usuario no autenticado')

                this.router.navigateByUrl('/home');
              }
            })
          );
// console.log('activate');
// return true;
}

canLoad(): Observable<boolean> | boolean {
  return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          alert('Usuario no autenticado')
          this.router.navigateByUrl('/home');
        }
      })
    );
//     console.log('load');
// return true;

}
}
