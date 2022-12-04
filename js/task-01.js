const numberCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", numberCategoriesEl.length);

const titleTextEl = document.querySelectorAll("h2");
Array.from(titleTextEl).map((element) => {
  console.log("Category:", element.textContent);
  console.log("Elements: ", element.nextElementSibling.children.length);
});
