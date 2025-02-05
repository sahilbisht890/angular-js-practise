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
  currentPage: number = 1; 
  totalPages: number = 4;
  pages: number[] = [1,2,3,4]

  productsData: any[] = [];
  loading = true ;

  ngOnInit(): void {
        this.fetchDataForPage(1);
  }


  changePage(page: number, event: Event) {
    event.preventDefault(); 
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log('Current Page:', this.currentPage);
      this.fetchDataForPage(page);
    }
  }

  fetchDataForPage(page: number) {
    const skip = ((page-1) * 12);
    this.loading = true ;
    try {
      axios
      .get(`https://dummyjson.com/products?skip=${skip}&limit=12`)
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
}
