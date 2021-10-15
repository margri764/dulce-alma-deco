import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { Search } from 'src/app/models/search.models';
import { Wood } from 'src/app/models/wood.models';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  lineIsEmpty:boolean=true;
  productos : any [];
  uploadProgress:number;
  uploadSub: Subscription;
  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!
  // limit : number = 3;
  woodProducts : any []=[];
  searchProduct : any []=[];
  public total : number;

//  get productWood(){
//   return this.woodProducts; 
//  }

bodyObjectString: string= '';
           
      constructor( private cart : Cart,
                   private http: HttpClient,
                   
                    ) {    }
  
    
   getProductsFromBackend(quantity: number = 0){
     
      // let params = new HttpParams()
      // .set("quantityDocs", quantity)
      return this.http.get<any>( `${this.baseUrl}api/products?quantityDocs=${quantity}`)
      .pipe(
        map( resp => {
          console.log(resp)
          this.woodProducts = resp.product.map( 
            user => new Wood( user._id, user.name, user.price, user.category, 
              user.description, user.status, user.img )  
          );
          this.total = resp.total;
          return {
            total: resp.total,
            product: this.woodProducts
        
          };
        }))
      };

    
      searchProducts(value: string){
    
        return this.http.get<any>( `${this.baseUrl}api/products/search?nameItem=${value}`)
        .pipe(
          map( resp => {
            this.searchProduct = resp.product
            .map( 
              item => new Search( item._id, item.name, item.price, item.category, 
                item.description, item.status, item.img )  
            );
            
            return {
              product: this.searchProduct,
          
            };

          }))
      };
   
     dataProductsToBackend( archivo: File , body:any  ) {
        
        this.bodyObjectString = JSON.stringify(body);
        console.log(archivo) 
        const formData = new FormData();
        formData.append('bodyFront', this.bodyObjectString);
        formData.append('imagen', archivo);
        
        
        const upload = this.http.post( `${this.baseUrl}api/products`, formData, {
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
       
    itemsProducts(){    
      return this.total;
    };
    
    cartIsEmpty(){
      if( this.cart.lines.length != 0 ){
         this.lineIsEmpty=true;
    }
      return;
    };
    
    }