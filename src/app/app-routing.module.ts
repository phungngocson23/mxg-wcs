import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { ProductComponent } from './user/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
