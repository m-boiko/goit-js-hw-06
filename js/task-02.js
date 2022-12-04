const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingEl = [];
const ulContainer = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingEl.push(li);
});

ulContainer.append(...ingEl);

console.log("ingEl", ingEl);
