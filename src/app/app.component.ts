import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dulce-alma-deco';

  id:boolean=false;

  constructor( public router : Router,
               private ruta : ActivatedRoute,
   )
   {
  
  }


ngOnInit()   {  
  this.router.events
  .pipe(filter(evt => evt instanceof NavigationEnd))  
  .subscribe((event: NavigationEnd) => {
   (event.url.includes('/store/view-more/')) 
   ?  this.id=true : this.id=false;
   
  });

}
  
//   detectUrl(id){
//   this.id=id;
// console.log(id)

// } 

}