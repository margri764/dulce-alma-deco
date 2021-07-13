import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { PdfService } from 'src/app/shared/services/pdf.service';



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
  arrayProducts=[];


  constructor( public cart: Cart,
               public messageService: MessageService ,
               private router : Router, 
               public rendered: Renderer2,
               public pdf : PdfService,
               private fb : FormBuilder,
              //  private dialog : MatDialog
            ) 
  {
  }      
  
  
  
  // generateBuy2( ){

  //   this.cart.lines.forEach((line)=>{
  //     let lines: Products=({
  //       cantidad: line.quantity,
  //       descripcion: line.producto.name,
  //       precio: parseInt(line.producto.price)

  //     });
  //     this.arrayProducts.push(lines)
    
  //     });
  //   }

 
  //   genInvoice(){
  //     console.log(this.arrayProducts)
  //   this.pdf.generateInvoice(this.arrayProducts).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

  
  

  onCloseSeguir(){
      this.router.navigateByUrl('/home')   
}

 disable(){
  // this.clicked=false;
  // this.cart.clear();


 }

  ngOnInit (){

   

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

