import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // recipe: { id, title, description, difficulty } = { id: null, title: '', description: '', difficulty: 0 };
  loadedRecipes = [];

  constructor(
    public dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchRecipes();
  }

   onCreateRecipe(postData: Recipe) {
    // Send Http request
    this.dataService.createRecipe(postData);
  }

  onFetchRecipes() {
    // Send Http request
    this.fetchRecipes();
  }

  onClearRecipes() {
    // Send Http request
  }

  private fetchRecipes() {
    this.dataService.getRecipes();
  }
}
