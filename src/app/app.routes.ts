import { Routes } from '@angular/router';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ProductComponent } from '../components/product/product.component';

export const routes: Routes = [
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent,
  },

  { path: '', component:ProductComponent , },
];
