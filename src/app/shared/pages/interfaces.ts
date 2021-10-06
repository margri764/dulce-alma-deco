
export interface Products {
    quantity: number,
    title: string,
    unit_price: number,
    name: string,
    email: string,
    phone: number,
    fecha: Date
  };

export interface MPProducts {
    quantity: number,
    title: string,
    unit_price: number
  };


  export interface ImagenBackend{
    id: number,
    name: string,
    price:number,
    category: string,
    description: string,
    status: boolean,
    img: string

}