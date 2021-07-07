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

  id:string;

  constructor( public router : Router,
               private ruta : ActivatedRoute,
   )
   {
 
 
  }


ngOnInit()   {  
  this.router.events
  .pipe(filter(evt => evt instanceof NavigationEnd))  
  .subscribe((event: NavigationEnd) => {
   if(event.url!= '/store/view-more/'){
    this.id='hide';
  
   }
  });

}
  
//   detectUrl(id){
//   this.id=id;
// console.log(id)

// } 

}