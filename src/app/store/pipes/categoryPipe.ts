import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category'
})
export class CategoryPipe implements PipeTransform {

    transform( category : string) : string {
        if( category === "612106c76bee722f001fd69e"){
                category = "Tienda/Articulos Fibro Facil";
        }   
		return category
    }
   

}