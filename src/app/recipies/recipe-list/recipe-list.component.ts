import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'this is a test', 'https://image.shutterstock.com/z/stock-vector-sample-stamp-grunge-texture-vector-illustration-1389188327.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
