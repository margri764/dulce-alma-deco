import { Component, DoCheck, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/model/cart.model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  navbarOpen:boolean;
  lineIsEmpty:boolean=true;

  // @ViewChild ('navbarClick') navbarClick:ElementRef<HTMLInputElement>
  // @HostListener('mouseout') onMouseOut(){
  //   if( this.cart.lines.length !==0 ){
  //     this.lineIsEmpty=false;
  //   }else{
  //     this.lineIsEmpty=true;
  //   }
  // }

  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private servicio : ImagesService,
              //  private rendered : Renderer2,
               private element : ElementRef,
               private router: Router

             
             )
              {     
               
      
            
       
                
            }
            
  ngDoCheck(): void {
    if( this.cart.lines.length !==0 ){
      this.lineIsEmpty=false;
    }else{
      this.lineIsEmpty=true;
    }
  
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
  
 




