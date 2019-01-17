import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe("Spaghetti", 
							 "Delicious pasta", 
							 "https://img.taste.com.au/hyE5dSN3/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg"
							 ),
		new Recipe("Spaghetti", 
							 "Delicious pasta", 
							 "https://img.taste.com.au/hyE5dSN3/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg"
							 )
	]

  constructor() { }

  ngOnInit() {
  }

}
