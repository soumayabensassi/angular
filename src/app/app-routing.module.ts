import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductsComponent } from './form-products/form-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffreemploiComponent } from './offreemploi/offreemploi.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{path:'Products',component:ProductsComponent},
{path:'offre',component:OffreemploiComponent},{path:'addProducts',component:FormProductsComponent},
{path:'',redirectTo:'Products',pathMatch:'full'},
{path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
