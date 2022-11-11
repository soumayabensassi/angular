import { Component, OnInit } from '@angular/core';
import { Product } from '../core/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string="welcome to products page!"
  productList!:Product[];
  constructor() { }

  ngOnInit(): void {
this.productList=[
{id:1,title:"T-shirt 1",price:18,quantity:0,like:0,picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bershka.com%2Ffr%2Fhomme%2Fv%25C3%25AAtements%2Ftee-shirts-c1010193239.html&psig=AOvVaw0EgeUbg2Isr59QwYWBeDmH&ust=1668172621726000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiD3bTZo_sCFQAAAAAdAAAAABAE"},
{id:2,title:"T-shirt 2",price:21,quantity:10,like:0,picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bershka.com%2Ffr%2Fhomme%2Fv%25C3%25AAtements%2Ftee-shirts-c1010193239.html&psig=AOvVaw0EgeUbg2Isr59QwYWBeDmH&ust=1668172621726000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiD3bTZo_sCFQAAAAAdAAAAABAE"},
{id:3,title:"T-shirt 3",price:16,quantity:8,like:0,picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bershka.com%2Ffr%2Fhomme%2Fv%25C3%25AAtements%2Ftee-shirts-c1010193239.html&psig=AOvVaw0EgeUbg2Isr59QwYWBeDmH&ust=1668172621726000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiD3bTZo_sCFQAAAAAdAAAAABAE"}
];
  }
  Buy(id:number)
{
for(let i=0;i<this.productList.length;i++)
{
if(this.productList[i].id==id)
{
  this.productList[i].quantity--;
}
}
}
Like(id:number)
{
for(let i=0;i<this.productList.length;i++)
{
if(this.productList[i].id==id)
{
  this.productList[i].like++;
}
}
}
}
