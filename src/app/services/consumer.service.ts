import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/products';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
productURL:string=environment.apiURL+"products"
  constructor(private http:HttpClient) {
   
   }
   getProducts(){
    return this.http.get<Product[]>(this.productURL);
   }
   getProduct(id:number){
    return this.http.get<Product>(this.productURL+"/"+id);
   }
   addProduct(produit:Product){
    return this.http.post(this.productURL,produit)}
   updateProduct(id:number,produit:Product){
    return this.http.put(this.productURL+"/"+id,produit)
   }
   deleteProduct(id:number){
    return this.http.delete(this.productURL+"/"+id)
   }
}
