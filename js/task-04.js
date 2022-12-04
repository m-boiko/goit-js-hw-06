let counterValue = 0;
const valueCounterEl = document.querySelector("#value");

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

btnIncrementEl.addEventListener("click", toIncrementCounterValue);
btnDecrementEl.addEventListener("click", toDecrementCounterValue);

function toIncrementCounterValue() {
  valueCounterEl.textContent = counterValue += 1;
}

function toDecrementCounterValue() {
  valueCounterEl.textContent = counterValue -= 1;
}
