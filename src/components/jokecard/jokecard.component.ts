import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-jokecard',
  imports: [CommonModule],
  templateUrl: './jokecard.component.html',
  styleUrl: './jokecard.component.css',
})
export class JokecardComponent{
      @Input() product : {[key:string] : any} = {}
} 
