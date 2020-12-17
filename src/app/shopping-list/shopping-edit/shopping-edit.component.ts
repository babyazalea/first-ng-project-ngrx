import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  createdShoppingList(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ) {
    this.shoppingListService.addedShoppingList(
      nameInput.value,
      parseInt(amountInput.value)
    );
  }
}
