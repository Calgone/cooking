import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// fa
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTrash, faHome, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';

// Project imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from './recipes/recipe-home/recipe-home.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { UsersComponent } from './users/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        RecipeListComponent,
        RecipesComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeHomeComponent,
        LoginComponent,
        UsersComponent,
        PageNotFoundComponent,
        UserEditComponent,
        UserListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        FontAwesomeModule,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {
    public constructor() {
        library.add(faSearch, faTrash, faHome, faEnvelope, faPen);
    }
}
