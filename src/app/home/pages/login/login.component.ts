import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  miFormulario: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: [ '',[ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router, 
               private authService: AuthService) { }


  login() {
  
  
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
      .subscribe( ok => {

        
        if ( ok ) {
         this.router.navigateByUrl('/admin'); 
        } else {
          alert('error desde el login.ts')
        }
      },(err: HttpErrorResponse)=> {

             
             //error de desconexion con el back end
             if(err.status === 0){
               alert ('opps!!')
               return
             };
       
       
             if(err.status === 400 || err.status === 403 || err.status === 500 
                  || err.status === 510 ){
       
                if(err.error.msg){ //error desde el controller (no hay archivo!!)
                    alert(err.error.msg);
                    return
                    };
       
               if(err.error.errors){ // error desde los check (nombre obligatorio)
                 const test = err.error.errors;
       
                 //recorro el arreglo de errores y guardo en "msgs" cada error y muestro la propiedad error
                test.map(msgs => {
                  
                  if(!msgs.msg.includes('Cast'))
                  alert (msgs.msg)
                  console.log(msgs)
                });
                        
        
       
                 return      
                };
              
             };
              
          })

}
logout() {
  // this._auth = undefined;
  localStorage.clear();
  this.router.navigateByUrl('/home'); 

  
}


}