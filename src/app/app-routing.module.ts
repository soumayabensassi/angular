import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductsComponent } from './form-products/form-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffreemploiComponent } from './offreemploi/offreemploi.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

const routes: Routes = [{path:'Products',component:ProductsComponent},
{path:'offre',component:OffreemploiComponent},{path:'addProducts',component:FormProductsComponent},{path:'updateProducts/:id',component:FormProductsComponent},
{path:'product/:id',component:ProductDetailsComponent},{path:'todo',component:TodoListComponentComponent},
{path:'',redirectTo:'Products',pathMatch:'full'},
{path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
