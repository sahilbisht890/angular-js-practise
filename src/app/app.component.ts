import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JokecardComponent } from '../components/jokecard/jokecard.component';
import axios from 'axios';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CommonModule , JokecardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Counting total click';
  count = 0;

  productsData: any[] = [];
  loading = true ;

  ngOnInit(): void {
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
  }

  addCount(){
    this.count = this.count +1;
  }
}
