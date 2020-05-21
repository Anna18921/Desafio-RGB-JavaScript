const inputR = document.getElementById("rangeR");
const inputG = document.getElementById("rangeG");
const inputB = document.getElementById("rangeB");

const valueR = document.getElementById("valueR");
const valueG = document.getElementById("valueG");
const valueB = document.getElementById("valueB");

inputR.value = 0;
inputG.value = 0;
inputB.value = 0;

const divColor = document.getElementById("divColor");

divColor.style.backgroundColor =
  "rgb(" + inputR.value + "," + inputG.value + "," + inputB.value + ")";

function start() {
  valueR.value = inputR.value;
  valueG.value = inputG.value;
  valueB.value = inputB.value;

  inputR.addEventListener("change", changeValueR);
  inputG.addEventListener("change", changeValueG);
  inputB.addEventListener("change", changeValueB);
}

function changeValueR() {
  valueR.value = inputR.value;
  chageColor();
}
function changeValueG() {
  valueG.value = inputG.value;
  chageColor();
}
function changeValueB() {
  valueB.value = inputB.value;
  chageColor();
}

function chageColor() {
  divColor.style.backgroundColor =
    "rgb(" + inputR.value + "," + inputG.value + "," + inputB.value + ")";
}

window.addEventListener("load", start);
