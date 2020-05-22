window.addEventListener("load", start);

var inputR = null;
var inputG = null;
var inputB = null;

var valueR = null;
var valueG = null;
var valueB = null;

var divColor = null;

function start() {
  inputR = document.getElementById("rangeR");
  inputG = document.getElementById("rangeG");
  inputB = document.getElementById("rangeB");

  valueR = document.getElementById("valueR");
  valueG = document.getElementById("valueG");
  valueB = document.getElementById("valueB");

  divColor = document.getElementById("divColor");

  valueR.value = inputR.value;
  valueG.value = inputG.value;
  valueB.value = inputB.value;

  inputR.addEventListener("input", changeValueR);
  inputG.addEventListener("input", changeValueG);
  inputB.addEventListener("input", changeValueB);
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
