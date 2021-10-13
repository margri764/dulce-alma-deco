import { Injectable } from "@angular/core";


@Injectable()
export class Cart {


  lines: CartLine[] = [];
  itemCount: number = 0;
  cartPrice: number = 0;
  cantidad: number = 1;



addLine(producto:any, quantity:number=1) {   

  let line = this.lines.find(line=> line.producto.id  === producto.id); 

    if (line !== undefined) {
      line.quantity += Number(quantity);
    
      this.cantidad=quantity;
   
    } else {
      this.lines.push(new CartLine(producto, quantity));
      this.cantidad=quantity;
    }
      this.recalculate();
    }

recalculate() {
  this.itemCount = 0;
  this.cartPrice = 0;
  this.lines.forEach(l => {
    this.itemCount += l.quantity;
    this.cartPrice += (l.quantity * l.producto.price);
  });

}  

   

  updateQuantity(producto:any, quantity: number) {
  const  line = this.lines.find(b => b.producto.id === producto.id);

    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: any) {
    const index = this.lines.findIndex(line => line.producto.id === id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
}
 

  export class CartLine {

    constructor(public producto: any, public quantity: number) { }
  
    get lineTotal() {
      return this.quantity * this.producto.price;
    }
  
  }
  