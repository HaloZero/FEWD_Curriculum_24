$("li").click(function(event) {
  $(event.target).parent().removeClass();
  $(event.target).parent().addClass($(event.target).attr("class"));
});