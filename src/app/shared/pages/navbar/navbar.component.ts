import { Component, DoCheck, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { Search } from 'src/app/models/search.models';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  navbarOpen:boolean;
  lineIsEmpty:boolean=true;
  public numItems : number = 0;
  public searchResult : Search []=[];
  public alert:boolean = false;
  public spinner : boolean = false;

  @ViewChild ('txtSearch') txtSearch:ElementRef<HTMLInputElement>


  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private _imageservice : ImagesService,
              //  private rendered : Renderer2,
               private element : ElementRef,
               private router: Router

             
             )
              {     
      
                
            }
            
  ngDoCheck(): void {
    this.numItems=this._imageservice.itemsProducts()      

    if( this.cart.lines.length !==0 ){
      this.lineIsEmpty=false;
    }else{
      this.lineIsEmpty=true;
    }
  
  }
  Search( ){
    this.alert = false;
    this.spinner = true;
    let value = this.txtSearch.nativeElement.value
    this.txtSearch.nativeElement.value=''  
    value= value.toUpperCase();
    this._imageservice.searchProducts( value ).subscribe ( ({product})=>{
      this.searchResult = product;
      this.spinner = false;
      if(this.searchResult.length==0){
        this.alert = true;

        setTimeout(()=>{
          this.alert = false;

          },3000);
      }
    });
  };
    
  goToItemSearch(query){
    if(query === "612106c76bee722f001fd69e"){
   this.router.navigateByUrl('/store/wood')
    }else{alert('error en el query')}

  }        
          

  ngOnInit(    ): void {



    this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))  
    .subscribe((evt: NavigationEnd) => {
      this.navbarOpen = false;
    });
    
    }
 

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
 
 }

}
  
 




