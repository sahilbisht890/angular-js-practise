import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product : {[key:string] : any} = {};
  productId : any = '';
  loading = true ;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.loading = true ;
      this.productId = params.get('id');
      this.fetchDetails();
    });
  }

     fetchDetails(){
      try {
        axios.get(`https://dummyjson.com/products/${this.productId}`).then((response) => {
          this.product = response.data;
        }).catch((err) => {
          console.log('Error while fetching the data' ,err);
        }).finally(() => {
          this.loading = false;
        })
      } catch(err){
        console.log('Error while fetching the product details'); 
      } 
  }

}
