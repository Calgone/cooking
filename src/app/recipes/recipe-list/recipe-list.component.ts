import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe;
  isLoading = false;
  error = null;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.fetchRecipes();
    // this.recipes = this.dataService.getRecipes();
    // console.log('RECIPES !', this.recipes);
  }

  public selectRecipe(recipe) {
    this.selectedRecipe = recipe;
  }

  onClearRecipes() {
    // Send Http request
  }

  private fetchRecipes() {
    this.isLoading = true;
    this.recipesService.getRecipes().subscribe(res => {
      this.isLoading = false;
      this.recipes = res;
    }, err => {
      this.error = err.message;
    });
  }

  public deleteRecipe(id: number) {
    this.recipesService.deleteRecipe(id).subscribe(
      () => console.log(`Recipe ${id} deleted.`),
      err => console.log(err)
    );
  }
}
