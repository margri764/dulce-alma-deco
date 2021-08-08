import { Component, OnInit, Renderer2 } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { PdfService } from 'src/app/shared/services/pdf.service';
import Swal from 'sweetalert2';


interface Products {
  quantity: number,
  title: string,
  unit_price: number
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})



export class ShoppingCartComponent implements OnInit {

 
  user: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;


  clicked:   boolean;
  dialogRef: any;
  navbarOpen:boolean;
  arrayProducts=[];
  lines: Products;


  constructor( public cart: Cart,
               public messageService: MessageService ,
               private router : Router, 
               public rendered: Renderer2,
               public pdf : PdfService,
               private authService: SocialAuthService,
                     ) 
  {  }      




generateBuy() {

  this.message();
  setTimeout(() => { 
    this.test();
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

 
  //   genInvoice(){
  //     console.log(this.arrayProducts)
  //   this.pdf.generateInvoice(this.arrayProducts).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }
  test(){
    this.cart.lines.forEach((line)=>{
      this.lines=({ 
       quantity: line.quantity,
       title: line.producto.name,
       unit_price: parseInt(line.producto.price)

      });
      this.arrayProducts.push(this.lines);
     });
    this.messageService.testMessage(this.arrayProducts).subscribe((res)=>{
      if(res=="true"){
        this.message();
      }
      return

    })
  }

  
  

  onCloseSeguir(){
      this.router.navigateByUrl('/home')   
}

 disable(){
  // this.clicked=false;
  // this.cart.clear();


 }

  ngOnInit (){

    this.authService.authState.subscribe(user => {
      this.user = user;
      
    //   if(user!=null){
    //     const {idToken} = user
    //     this.employeeService.userLogin={
    //       // name,
    //       // email
    //       idToken
    //   }
 

    // } 
    });


   

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

 
  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


}

