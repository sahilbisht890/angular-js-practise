import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jokecard',
  imports: [CommonModule],
  templateUrl: './jokecard.component.html',
  styleUrl: './jokecard.component.css',
})
export class JokecardComponent{
      @Input() product : {[key:string] : any} = {}

      constructor(private router : Router){}

      handleDetailsNavigate(id : any){
        this.router.navigate([`/productDetails`,id])
      }
} 
