import { Injectable } from '@angular/core';
import { Product } from '../core/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productListServices:Product[]=[
    {id:1,title:"T-shirt 1",price:18,quantity:0,like:0,picture:"https://static.pullandbear.net/2/photos/2022/I/0/2/p/8242/500/712/8242500712_1_1_3.jpg?t=1664896329042"},
    {id:2,title:"T-shirt 2",price:21,quantity:10,like:0,picture:"https://static.pullandbear.net/2/photos/2022/I/0/2/p/8242/500/712/8242500712_1_1_3.jpg?t=1664896329042"},
    {id:3,title:"T-shirt 3",price:16,quantity:8,like:0,picture:"https://static.pullandbear.net/2/photos/2022/I/0/2/p/8242/500/712/8242500712_1_1_3.jpg?t=1664896329042"}
    ];
  constructor() { }
  addProduct(product:Product)
  {this.productListServices.push(product);

  }
}
