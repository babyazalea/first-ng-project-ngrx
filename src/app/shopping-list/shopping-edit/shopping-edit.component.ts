import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<{
    name: string;
    amount: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  createdShoppingList(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ): void {
    this.newIngredient.emit({
      name: nameInput.value,
      amount: parseInt(amountInput.value),
    });
  }
}
