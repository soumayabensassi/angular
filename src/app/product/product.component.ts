import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../core/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
@Input()p!:Product;
@Output()deleteProduct = new EventEmitter();
  ngOnInit(): void {
  }
Delete()
{
  this.deleteProduct.emit(this.p.id)
}
}
