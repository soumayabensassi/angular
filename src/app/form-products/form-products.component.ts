import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {
product:Product=new Product();
  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit(): void {
  }
  ajouter()
  {this.product.like=0;
    this.productService.addProduct(this.product)
    this.route.navigateByUrl("/Products")
  }

}
