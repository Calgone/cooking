import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Recipe } from './recipes/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecipesService {
    private baseUrl = 'http://localhost:3000/recipes';
    // private http: HttpClient;

    public constructor(private http: HttpClient) {}

    public getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.baseUrl}/all`).pipe(
            map((responseData): Recipe[] => {
                const recipesArray: Recipe[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        recipesArray.push({ ...responseData[key] });
                    }
                }
                return recipesArray;
            }),
        );
        // .subscribe(recipes => {
        //   console.log(recipes);
        //   return recipes;
        // }
        // );
        // return this.recipes;
    }

    public getRecipe(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
    }

    public createRecipe(recipe: Recipe): void {
        // this.recipes.push(recipe);
        this.http.post(`${this.baseUrl}`, recipe).subscribe((responseData): void => {
            console.log(responseData);
        });
    }

    public deleteRecipe(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
