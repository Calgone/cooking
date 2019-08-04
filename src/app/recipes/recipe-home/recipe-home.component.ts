import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNewRecipes() {
    // Complex calculation
    this.router.navigate(['/recipes/new']);
  }
}
