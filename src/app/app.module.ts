import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreemploiComponent } from './offreemploi/offreemploi.component';
import { FormsModule } from '@angular/forms';
import { FormProductsComponent } from './form-products/form-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import {HttpClientModule} from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponent,
    NavbarComponent,
    OffreemploiComponent,
    FormProductsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    TodoListComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
