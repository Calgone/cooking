import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeHomeComponent } from './recipes/recipe-home/recipe-home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UsersComponent } from './users/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeHomeComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ],
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            { path: '', component: RecipeHomeComponent },
            { path: 'new', component: UserEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: UserEditComponent },
        ],
    },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
