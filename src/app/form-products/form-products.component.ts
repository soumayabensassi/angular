import { Component, OnInit } from '@angular/core';
import { Product } from '../core/products';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {
product:Product=new Product();
  constructor() { }

  ngOnInit(): void {
  }

}
