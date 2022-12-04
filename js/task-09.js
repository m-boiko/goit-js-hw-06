function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chngColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const ColorTextOutput = document.querySelector(".color");

chngColorBtn.addEventListener("click", changeBgColor);

function changeBgColor(event) {
  const collorBg = getRandomHexColor();
  console.log("changeBgColor  collorBg", collorBg);
  bodyEl.style.backgroundColor = collorBg;
  ColorTextOutput.textContent = collorBg;
}
