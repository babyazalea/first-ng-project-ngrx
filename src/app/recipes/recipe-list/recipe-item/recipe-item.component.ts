import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
  @Output() recipeSelect = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(recipeId: number) {
    this.recipeSelect.emit(recipeId);
  }
}
