"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("li.item");

  console.log(`В списке ${categories.length} категории`);

  categories.forEach((item) => {
    console.log(`Категория ${item.querySelector("h2").textContent}`);
    console.log(
      `Количество элементов: ${item.querySelector("ul").children.length}`
    );
  });
});
