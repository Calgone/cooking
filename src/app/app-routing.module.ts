import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeHomeComponent } from './recipes/recipe-home/recipe-home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeHomeComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
