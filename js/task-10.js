function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#inpt");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let startDivCount = 30;
let stringHtml = "";
btnCreate.addEventListener("click", () => {
  for (let i = 0; i <= Number(input.value); i += 1) {
    startDivCount += 10;
    stringHtml += `<div style="height: ${startDivCount}px; width:${startDivCount}px; background:${getRandomHexColor()}; margin-bottom: 30px"></div>`;
  }
  console.log("btnCreate.addEventListener  stringHtml", stringHtml);
  boxesContainer.insertAdjacentHTML("beforeend", stringHtml);
});

btnDestroy.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
