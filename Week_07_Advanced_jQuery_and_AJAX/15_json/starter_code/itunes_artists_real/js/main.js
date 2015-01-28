// use this JSON to fill in the HTML fields!
// use the example to see what it's supposed to look like

$.ajax({
  url: "https://itunes.apple.com/search?term=abba",
  crossDomain: true,
  dataType: "jsonp"
}).done(function(data) {
  console.log(data);
});
