"use strict";

// Счетчик состоит из спана и кнопок,
//  которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');

const span = document.querySelector("#value");

const increment = () => {
  span.textContent = counterValue += 1;
};
const decrement = () => {
  span.textContent = counterValue -= 1;
};

incrementRef.addEventListener("click", increment);
decrementRef.addEventListener("click", decrement);
