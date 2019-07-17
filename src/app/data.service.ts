import { Injectable } from '@angular/core';

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

  constructor() { }

  public getRecipes(): Array<{ id, title, description, difficulty }> {
    return this.recipes;
  }

  public createRecipe(recipe: { id, title, description, difficulty }) {
    this.recipes.push(recipe);
  }
}
