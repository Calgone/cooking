import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  recipes = [
    { id: 1, title: 'Recipe 001', description: 'Recipe 001 des', difficulty: 3 },
    { id: 2, title: 'Recipe 002', description: 'Recipe 002 des', difficulty: 2 },
    { id: 3, title: 'Recipe 003', description: 'Recipe 003 des', difficulty: 5 },
    { id: 4, title: 'Recipe 004', description: 'Recipe 004 des', difficulty: 1 },
    { id: 5, title: 'Recipe 005', description: 'Recipe 005 des', difficulty: 4 }
  ];

  constructor(
    private http: HttpClient,
  ) { }
  //: Array<{ id, title, description, difficulty }> {
  public getRecipes() {
    return this.http.get('http://localhost:3000/recipes/all')
      .pipe(
        map(responseData => {
          const recipesArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              recipesArray.push({ ...responseData[key] });
            }
          }
          return recipesArray;
        })
      )
      .subscribe(recipes => {
        console.log(recipes);
      });
    // return this.recipes;
  }

  public createRecipe(recipe: Recipe) {
    // this.recipes.push(recipe);
    this.http
      .post(
        // 'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        'http://localhost:3000/auth/basic-test',
        recipe
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }


}
