const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", toFontSizeControl);

function toFontSizeControl(event) {
  text.style.fontSize = event.target.value + "px";
}
