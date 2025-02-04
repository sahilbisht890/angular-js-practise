import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { JokecardComponent } from '../jokecard/jokecard.component';
@Component({
  selector: 'app-product',
  imports: [CommonModule , JokecardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  title = 'Counting total click';
  count = 0;

  productsData: any[] = [];
  loading = true ;

  ngOnInit(): void {
    try {
      axios
      .get('https://dummyjson.com/products?limit=10')
      .then((response) => {
        this.productsData = response.data.products;
      })
      .catch((err) => {
        console.log('Error while fetching data', err);
        this.productsData = [];
      }).finally(() => {
        this.loading = false;
      });

    }catch(err){
      console.log('Error while fetching the list')
    }
  }

  addCount(){
    this.count = this.count +1;
  }
}
