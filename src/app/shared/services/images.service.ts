import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Cart } from 'src/app/model/cart.model';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  lineIsEmpty:boolean=true;
  productos : any [];
  uploadProgress:number;
  uploadSub: Subscription;
  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!

  woodProducts : any []=[];

 get productWood(){
  return this.woodProducts; 
 }

bodyObjectString: string= '';
           
    
      constructor( private cart : Cart,
                   private http: HttpClient,
                   
                    ) {    }
  
    
   getProductsFromBackend( ){
       
      let params = new HttpParams().set("limit","20");
      this.http.get( `${this.baseUrl}/api/products`, { params } )
      .subscribe( (res:any)=>{
        this.woodProducts = res.product

      })
     
      };


   
     dataProductsToBackend( archivo: File , body:any  ) {
        
        this.bodyObjectString = JSON.stringify(body);
        console.log(archivo) 
        const formData = new FormData();
        formData.append('bodyFront', this.bodyObjectString);
        formData.append('imagen', archivo);
        
        const upload = this.http.post( `${this.baseUrl}/api/products`, formData, {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(
        finalize(() => this.reset())
      );

      this.uploadSub = upload.subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));

      }
      })
        
     }
  
   
  

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
    }
    
    reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
    }
    
    
  
     
    getIndex(i:any){
      return  this.woodProducts[i];
    };
       
    itemsProductos(){    
      return this.woodProducts.length;
    };
    
    cartIsEmpty(){
      if( this.cart.lines.length != 0 ){
         this.lineIsEmpty=true;
    }
      return;
    };
    
    }