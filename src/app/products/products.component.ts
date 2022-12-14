import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../core/products';
import { CalculServiceService } from '../services/calcul-service.service';
import { ConsumerService } from '../services/consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string="welcome to products page!"
  productList!:Product[];
  constructor(private productService:ProductService,private calcul:CalculServiceService,private consumer:ConsumerService,private route:Router) { }

  ngOnInit(): void {
this.consumer.getProducts().subscribe(
{  next:(data)=>this.productList=data,
 error:(error)=>console.log(error)
 
}
);
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
delete(id:any)
{
this.consumer.deleteProduct(id).subscribe(()=>this.productList=this.productList.filter((p)=>p.id != id))
}
}
