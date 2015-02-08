document.addEventListener("DOMContentLoaded", function(event) {

  var total = 0;

  function zero() {
    total = 0;
    document.getElementById('result').innerHTML = total;
  }
  function addFive() {
    total += 5;
    document.getElementById('result').innerHTML = total;
  }

  function addTen() {
    total += 5;
    document.getElementById('result').innerHTML = total;
  }

  function minusOne() {
    total -= 1;
    document.getElementById('result').innerHTML = total;
  }

  document.getElementById('zero').onclick = zero;
  document.getElementById('add5').onclick = addFive;
  document.getElementById('add10').onclick = addTen;
  document.getElementById('sub1').onclick = minusOne;
});
