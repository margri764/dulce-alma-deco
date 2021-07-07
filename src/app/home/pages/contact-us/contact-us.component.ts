import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
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


myForm:FormGroup = this.fb.group({
name:    ['',[Validators.required,Validators.pattern( this.validatorservice.nameLastName)]],
phone:   ['',Validators.required],
email:   ['',[Validators.required, Validators.pattern( this.validatorservice.emailPattern)]],
message :[]

});

// @ViewChild('form') miFormulario: NgForm;

  


constructor( public messageService: MessageService,
             public validatorservice: ValidatorService , 
             private cart : Cart,
             private router : Router,
             private fb : FormBuilder
            //  public dialogRef : MatDialogRef<ContactUsComponent>,
         
            ) 
             { 
             }
            
  // probando( ){
  // this.cart.lines.forEach(element => {
  // this.array.push(element.producto.nombre)
  //   });
  // this.string=this.array
  // }
  
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

    // imprimir el valor del formulario, sólo si es válido

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Mensaje Enviado correctamente!!',
      showConfirmButton: false,
      timer: 3000
    })
    console.log(this.myForm.value);
    this.cart.clear();
    this.clicked=false; 
    this.myForm.reset(); 

}


// contactForm(form) {

//   this.messageService.sendMessage(form.value).subscribe(() => {
//   Swal.fire("Su Pedido", "Pedido enviado correctamente", "success");
//   });
//   this.cart.clear();
//   this.clicked=false    
//   }

  // formularioCompra(form){
  //     this.messageService.sendMercadoPago(form.value).subscribe((res) => {
      
        
  //     let response = JSON.stringify(res)
 
  //     response = response.replace(/"/g,"")
 
  //    location.href =(response)
      
      
  //     console.log('respuesta desde server',response)

 
  
  //    });
  // }    

         
               
            
}