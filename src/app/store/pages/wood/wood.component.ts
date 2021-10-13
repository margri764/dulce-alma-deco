import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ImagesService } from '../../../shared/services/images.service';

import { Wood } from 'src/app/models/wood.models';
import { Cart } from 'src/app/models/cart.model';
import { NotificationService } from 'src/app/shared/services/notification.service';


@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent implements OnInit {

  // arrayProductos : ImagenBackend []=[];
  public arrayProducts : any;
  public numItem : number;
  public itemCount : number; 
  public numPage : number = 1; 
  increaseDocuments : number = 0;
  cartel : any;
  hidden:boolean = false;
  arrowHidden:boolean = true;
  arrowHiddenForw:boolean = false





  public numItems(){

    this.itemCount=this.numItem / 4; 
    if(this.itemCount % 1 != 0 ){
      this.itemCount = (Math.floor(this.itemCount)) + 1;
    return this.itemCount;
    }
    return this.itemCount;

  }


  constructor(
            public _imageService:  ImagesService, 
            public cart : Cart,
            public router : Router,
            private cdRef : ChangeDetectorRef,
            private notificationService : NotificationService, 
            ) { 
              
  }

  // ngAfterViewChecked(){
  //   this.cdRef.detectChanges();
  //   this.loadProducts();

  // };


  ngOnInit():void { 

  
    this.loadProducts();

   setTimeout(()=>{
    this.loadProducts();
    this.hidden= true
    },10000);

   setTimeout(()=>{
    this.hidden= true
    if(this.arrayProducts.length === 0){
    this.router.navigateByUrl('/error-page')}
    },15000);


 
     
   }// fin ngOnInit

   loadProducts(){
    this._imageService.getProductsFromBackend(this.increaseDocuments)
    .subscribe( ( { total, product} ) =>{
      this.arrayProducts = product;
      this.numItem = total; 
      this.hidden = true;
      this.numItems();
    

    });
     
   }
   

   addItem(item:any){
    this.cart.addLine(item);
    this.notification();
  }

  notification(){
    if(this.cart.lines.length !== 0)
       this.notificationService.success(':: Producto Agregado al Carrito')
  }

    changePage( valor: number ) {
      this.increaseDocuments += valor;

console.log(this.increaseDocuments,this.numPage, valor,this.numItem)
     if( this.numPage < this.itemCount && valor > 0 ){
      this.numPage++;
     }

     if( valor < 0  ){
      this.numPage--;
     }
     
     this.arrowHidden=false;
     this.arrowHiddenForw=false;
  
      if ( this.increaseDocuments <= 0 ) {
        this.increaseDocuments = 0;
        this.arrowHidden=true;
        this.arrowHiddenForw=false;


      } else if ( this.increaseDocuments >= this.numItem ) {
        this.increaseDocuments -= valor; 
        // this.numPage--;
      }
      if(this.numPage == this.itemCount){
        this.arrowHiddenForw=true;
      }
      // if(valor == this.increaseDocuments ){
      //   this.arrowHidden=true;
      // }
     
  
      this.loadProducts();
    }
   
        
}





