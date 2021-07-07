import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/model/cart.model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numero: any;
  navbarOpen:boolean;

  

  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private servicio : ImagesService,
               private rendered : Renderer2,
               private element : ElementRef,
               private router: Router

             
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
      
                          
             });

            //  const navLinks = document.querySelectorAll('.nav-item')
            //  const menuToggle = document.getElementById('navbarSupportedContent')
            //  const bsCollapse = new.navmdb.Collapse(menuToggle)
            //  navLinks.forEach((l) => {
            //      l.addEventListener('click', () => { bsCollapse.toggle() })
            //  })
           
            
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
  
 




