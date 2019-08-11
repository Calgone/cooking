import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
    // recipe: { id, title, description, difficulty } = { id: null, title: '', description: '', difficulty: 0 };
    @ViewChild('recipeForm', { static: false }) recipeForm: NgForm;
    public recipe: Recipe;

    public constructor(public recipesService: RecipesService, private route: ActivatedRoute) {
        this.recipe = {
            id: null,
            title: null,
            description: null,
            status: null,
            userId: null,
            ingredient_groups: [],
            public: false,
            steps: [],
            cost: 0,
            servings: 1,
            prep_minutes: null,
            cook_minutes: null,
            rest_minutes: null,
            difficulty: 0,
            img_path: null,
            created_at: null,
            updated_at: null,
        };
    }

    public ngOnInit() {
        // console.log(this.route.snapshot.params['id']); // A jour seulement au chargement de la page
        // this.route.params.subscribe((params: Params) => {
        //     this.recipe.id = params['id'];
        //     console.log(this.recipe);
        // });
    }

    // Pour rappel utilisation de patchValue :
    public changeValeurExemple() {
        this.recipeForm.form.patchValue({
            cost: 0,
        });
    }

    public onCreateRecipe(recipeData: Recipe) {
        console.log(recipeData);

        // Send Http request
        // this.recipesService.createRecipe(recipeData);
        // this.re
    }
}
