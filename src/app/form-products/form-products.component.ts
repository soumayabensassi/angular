import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../core/products';
import { ConsumerService } from '../services/consumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {
product:Product=new Product();
  constructor(private productService:ProductService,private route:Router,private consumer:ConsumerService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.consumer.getProduct(this.active.snapshot.params['id']).subscribe((data)=>this.product=data)
  }
  ajouter(){
  this.product.like=0;
  //   this.productService.addProduct(this.product)
  //  
  this.active.snapshot.params['id']!= null 
  ?
  this.consumer.updateProduct(this.active.snapshot.params['id'],this.product).subscribe(()=>this.route.navigateByUrl("/Products"))
  :
  this.consumer.addProduct(this.product).subscribe(
    ()=>this.route.navigateByUrl("/Products")
     
  )
  }

}
