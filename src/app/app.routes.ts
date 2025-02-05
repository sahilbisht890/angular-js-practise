import { Routes } from '@angular/router';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ProductComponent } from '../components/product/product.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { AboutComponent } from '../components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
    {
      path: '', component: ProductComponent, pathMatch: 'full'

    },  
    {
          path: 'productDetails/:id',
          component: ProductDetailsComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
},

  ]
  }
];
