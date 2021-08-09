import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../validator/validator.service';
import { Router } from '@angular/router';

interface Products {
  quantity: number,
  title: string,
  unit_price: number
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})



export class InvoiceComponent implements OnInit {

  fecha: Date = new Date(); 
  arrayProducts=[];
  lines: Products;
  quantity:any;
  visible:boolean=false;
    
  start:true;  
  array: any []=[] 
  string:any;
  clicked:boolean;
  display_none: boolean=false;
  name:string='';
  phone:string='';
  email:string='';

  myForm:FormGroup = this.fb.group({
  name:    ['',[Validators.required,Validators.pattern( this.validatorservice.nameLastName)]],
  phone:   ['',Validators.required],
  email:   ['',[Validators.required, Validators.pattern( this.validatorservice.emailPattern)]],
  message :['']
  });

dataFormToInvoice(){
  this.name= this.myForm.controls.name.value;
  this.phone= this.myForm.controls.phone.value;
  this.email= this.myForm.controls.email.value;


}
  
  
  constructor( public cart: Cart,
              public messageService: MessageService,
              private fb : FormBuilder,
              public validatorservice: ValidatorService , 
              private router : Router, 
              ) 
              { 

    // this.downloadPDF();

  }

  downloadPDF() {
    this.visible=true;
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('./assets/1.jpg');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}DulceAlmaDeco.pdf`);
      this.visible=false;
    });
 
  }

  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  
  clear(){
   
    Swal.fire({
      title: 'Estas segurx de Cancelar la Compra?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#ff7f50',
      cancelButtonColor:  '#ff7f50',
      confirmButtonText: 'Si, Cancelar Compra!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Tu compra ha sido cancelada',
          'success'
        )
        this.cart.clear()
        this.router.navigateByUrl('/home')
      }
    })

  }


  

  ngOnInit(): void {
  }


  generateBuy() {

    this.message();
    setTimeout(() => { 
      // this.test();
      this.callToBackend();    
    }, 3800);
    
  
  }
  message(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Seras redirigido a Mercado Pago, ¡Gracias por tu compra!',
      showConfirmButton: false,
      timer: 4000
    });
  
  }
  
  callToBackend(){
  
      this.cart.lines.forEach((line)=>{
         this.lines=({ 
          quantity: line.quantity,
          title: "Productos Seleccionados",
          unit_price: parseInt(line.producto.price)
  
         });
        });
        this.messageService.sendMercadoPago(this.lines).subscribe((res:any) => {
  
        // console.log('respuesta desde server',res)
        let response = JSON.stringify(res)
  
        response = response.replace(/"/g,"")
  
        location.href =(response)
        this.cart.clear();
  
        // console.log('respuesta desde server',response)
        }); 
      }
  
      sendForm(){
        if ( this.myForm.invalid ) {
          this.myForm.markAllAsTouched();
          return;
        }
        this.display_none= true;
        this.dataFormToInvoice();


      }
}
