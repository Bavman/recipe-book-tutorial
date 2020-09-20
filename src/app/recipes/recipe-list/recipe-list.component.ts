import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Name', 'A Test Description',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg'),
    new Recipe('A Test Name 2', 'A Test Description, this is a nice one',
    'https://www.rd.com/wp-content/uploads/2019/05/American-shorthair-cat.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
