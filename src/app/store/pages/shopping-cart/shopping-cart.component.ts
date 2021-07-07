import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Cart } from 'src/app/model/cart.model';
import { PopupComponent } from 'src/app/shared/pages/popup/popup.component';
import { MessageService } from 'src/app/shared/services/message.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild ('inputQuantity') inputQuantity:ElementRef<HTMLInputElement>
  @ViewChild ('canvas') canvas:ElementRef<HTMLInputElement>

 
  clicked:boolean;
  dialogRef: any;
  navbarOpen:boolean;
  


  constructor( public cart: Cart,
               public messageService: MessageService ,
               private router : Router, 
               public rendered: Renderer2
              //  private dialog : MatDialog
            ) 
              {        } 

  updateQuantities (producto:any){

  const valueInput= parseInt(this.inputQuantity.nativeElement.value);

  this.cart.updateQuantity( producto, valueInput )


  }

  onCloseSeguir(){
      this.router.navigateByUrl('/home')   
}

  ngOnInit (){

// this.onCreate();
  

  }




  toggleNavbar() {
   
  this.rendered.addClass(this.canvas.nativeElement,'.offcanvas.show')
 
 }

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

