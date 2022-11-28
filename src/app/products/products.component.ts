import { Component, OnInit } from '@angular/core';
import { Product } from '../core/products';
import { CalculServiceService } from '../services/calcul-service.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string="welcome to products page!"
  productList!:Product[];
  constructor(private productService:ProductService,private calcul:CalculServiceService) { }

  ngOnInit(): void {
this.productList=this.productService.productListServices;
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
num!:number;
verif()
{
this.num=this.calcul.getNumberOf(this.productList,"quantity",0)
}
}
