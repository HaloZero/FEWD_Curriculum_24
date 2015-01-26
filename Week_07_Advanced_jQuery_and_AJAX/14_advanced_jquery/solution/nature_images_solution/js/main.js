$(document).ready(function(event) {
  $("#images-container img").click(function(event) {
    $("#main-container img").attr("src", $(event.target).attr('src'));
  })
});