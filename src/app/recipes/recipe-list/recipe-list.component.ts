import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes;
  selectedRecipe;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.recipes = this.dataService.recipes;
  }

  public selectRecipe(recipe) {
    this.selectedRecipe = recipe;
  }
}
