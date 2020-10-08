"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.target.value.length === +input.dataset.length) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    return;
  }
  event.target.classList.add("invalid");
  event.target.classList.remove("valid");
});
