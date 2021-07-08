import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Cart } from 'src/app/model/cart.model';
import { PopupComponent } from 'src/app/shared/pages/popup/popup.component';
import { MessageService } from 'src/app/shared/services/message.service';
import { PdfService } from 'src/app/shared/services/pdf.service';
import Swal from 'sweetalert2';

interface Products{
    quantity: number,
    price: number,
    name: string,
};

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  

  // @ViewChild ('inputQuantity') inputQuantity:ElementRef<HTMLInputElement>
  // @HostListener('click') onClick(){
  //   this.valueInput= parseInt(this.inputQuantity.nativeElement.value)
  // }


 
  clicked:   boolean;
  dialogRef: any;
  navbarOpen:boolean;
  valueInput:any;


  constructor( public cart: Cart,
               public messageService: MessageService ,
               private router : Router, 
               public rendered: Renderer2,
               public pdf : PdfService,
               private fb : FormBuilder
              //  private dialog : MatDialog
            ) 
              {        }
  
  generateBuy2( ){

    const arrayProducts=[];

    this.cart.lines.forEach((line)=>{
      let lines: Products=({
        quantity: line.quantity,
        name: line.producto.name,
        price: line.producto.price

      });
      arrayProducts.push(lines)
    
    });
    console.log(arrayProducts)

    // this.arrayProducts.push({
    //   quantity,
    //   price,
    //   name
    // });
    // console.log(this.arrayProducts)
    // }
  }
    // form=this.myPdf.value
    // console.log(form);
    // // this.pdf.generateInvoice(form.value).subscribe((res)=>{
    // //   console.log(res);
    // })


  
  
  // updateQuantities (producto:any){

  //   this.cart.updateQuantity( producto, this.valueInput );

  // }

  onCloseSeguir(){
      this.router.navigateByUrl('/home')   
}


  ngOnInit (){

  

   

  }

 

//   toggleNavbar() {
   
//   this.rendered.addClass(this.canvas.nativeElement,'.offcanvas.show')
 
//  }

  formularioCompra(form:any){

//    this.clicked=false;
//   this.messageService.sendMercadoPago(form.value).subscribe((res:any) => {
        
//     console.log('respuesta desde server',res)
//   let response = JSON.stringify(res)

//   response = response.replace(/"/g,"")

//  location.href =(response)
  
  
//   console.log('respuesta desde server',response)
//  }); 
 }
//  onCreate(){
//   this.router.navigateByUrl('home/contact-us')
//   if(this.router.url!='./store/shopping-cart')
//   this.dialogRef.close()
//   const dialogConfig=new MatDialogConfig()
//   dialogConfig.disableClose=true
//   dialogConfig.autoFocus=true
//   dialogConfig.width="100%"
//   dialogConfig.height="100%"

//   this.dialog.open(PopupComponent)
// }

}

