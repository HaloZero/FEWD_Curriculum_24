document.addEventListener("DOMContentLoaded", function(event) {

  $("#grayButton");
  document.getElementById('grayButton').onclick = switchGray;
  document.getElementById('whiteButton').onclick = switchWhite;
  document.getElementById('blueButton').onclick = switchBlue;
  document.getElementById('yellowButton').onclick = switchYellow;

  // this is a comment, nothing in this line is evaluated by javascript
  // use it explain what's going on
  function switchGray() {
    document.getElementsByTagName('body')[0].className = 'gray-background';
  }

  // code inside functions are not evaluated until they are called
  // when you tell an element 'onClick' = a function, it will call that function
  // and evaluate any code inside of it.
  function switchWhite() {
    document.getElementsByTagName('body')[0].className = 'white-background';
  }

  function switchBlue() {
    document.getElementsByTagName('body')[0].className = 'blue-background';
  }

  function switchYellow() {
    document.getElementsByTagName('body')[0].className = 'yellow-background';
  }
});
