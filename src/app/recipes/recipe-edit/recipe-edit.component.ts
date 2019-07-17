import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: { id, title, description, difficulty } = { id: null, title: '', description: '', difficulty: 0};
  
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createRecipe()
  {
    console.log(this.recipe);
    this.dataService.createRecipe(this.recipe);
    this.recipe = {id: null, title: '', description: '', difficulty: 0};
  }

}
