import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'images'
})
export class imgPipe implements PipeTransform {

    transform( img : any) : string {
         
		return img
    }
   

}