// When the user clicks the button, run the compare function

function inputBoxAValue() {
  var a = document.getElementById('a').value;
  a = parseFloat(a);
  return a;
}

function inputBoxBValue() {
  var b = document.getElementById('b').value;
  b = parseFloat(b);
  return b;
}

function compare() {
  // get the value of A
  var a = inputBoxAValue();


  // Print `comparison` string on the page!
  document.getElementById('comparison').innerHTML = '?';
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('submit').onclick = compare;
});