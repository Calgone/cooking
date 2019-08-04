import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // recipe: { id, title, description, difficulty } = { id: null, title: '', description: '', difficulty: 0 };
  recipe: Recipe;

  constructor(
    public recipesService: RecipesService,
    private route: ActivatedRoute
  ) {
    this.recipe = {
      id: null,
      title: null,
      description: null,
      status: null,
      userId: null,
      public: null
    };
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipe.id = params['id'];
          console.log(this.recipe);
        }
      );
  }

  onCreateRecipe(postData: Recipe) {
    // Send Http request
    this.recipesService.createRecipe(postData);
  }

}
