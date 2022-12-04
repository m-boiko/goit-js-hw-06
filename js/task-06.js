const input = document.querySelector("#validation-input");

input.addEventListener("blur", outInputBlur);

function outInputBlur() {
  const valueLength = input.value.length;
  const datasetLength = Number(input.dataset.length);

  if (valueLength === datasetLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
