"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li
// за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
// let ul = document.querySelector("#ingredients");

let ulRef = document.querySelector("#ingredients");

const createIngredientsList = ingredients.map((elem) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = elem;
  return ingredientItem;
});

ulRef.append(...createIngredientsList);
