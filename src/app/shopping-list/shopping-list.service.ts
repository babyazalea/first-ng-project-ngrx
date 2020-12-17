import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addedShoppingList(name: string, amount: number) {
    const newAddedIngredient = new Ingredient(name, amount);

    this.ingredients.push(newAddedIngredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
