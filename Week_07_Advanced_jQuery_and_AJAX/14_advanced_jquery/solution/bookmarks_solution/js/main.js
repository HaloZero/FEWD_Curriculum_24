$(document).ready(function() {
  $("#create-button").click(function() {
    var siteName = $("#name-input").val();
    var URL = $("#url-input").val();
    $("#bookmarks").append($("<a>").text(siteName).attr("href", URL));
  });
});