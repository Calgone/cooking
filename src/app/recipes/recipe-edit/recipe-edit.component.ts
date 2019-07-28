import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // recipe: { id, title, description, difficulty } = { id: null, title: '', description: '', difficulty: 0 };

  constructor(
    public recipesService: RecipesService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

   onCreateRecipe(postData: Recipe) {
    // Send Http request
    this.recipesService.createRecipe(postData);
  }

}
