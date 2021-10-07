import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 

quantity:any;
start:true;  
array: any []=[] 
string:any;
clicked:boolean;
hidden: boolean = true;




myForm:FormGroup = this.fb.group({
name:    ['',[Validators.required,Validators.pattern( this.validatorservice.nameLastName)]],
phone:   ['',Validators.required],
email:   ['',[Validators.required, Validators.pattern( this.validatorservice.emailPattern)]],
message :['']
});


  


constructor( public messageService: MessageService,
             public validatorservice: ValidatorService , 
             private cart : Cart,
             private router : Router,
             private fb : FormBuilder
         
            ) 
             { 
             }
            

  
  ngOnInit(  ) {
                }
           
validField( field: string ) {

  return this.myForm.controls[field].errors 
          && this.myForm.controls[field].touched;
}

           

onCloseSeguir(){

  this.router.navigateByUrl('/home')
  
  }

  sendForm (){
   
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.hidden=false;

      this.messageService.sendMessage(this.myForm.value).subscribe( (res) => {
          if (res=='true') {
          this.hidden=true;

        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje Enviado correctamente!!',
        showConfirmButton: false,
        timer: 3000
        })
        this.cart.clear();
        this.clicked=false; 
        this.myForm.reset(); 
        this.clicked=false    
         }
        },(err: HttpErrorResponse)=> {

          this.hidden = true;
      
       //error de base dato offline
            // console.log(err.status) 
      
      // error desde los check
            // console.log(err.error.error.errors.name.message) 
            
            //error de desconexion con el back end
            if(err.status===0){
              alert ('opps!!')
              return
            };
      
      
            if(err.status === 400 || err.status === 403 ){
      
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
      


         
               
            
}