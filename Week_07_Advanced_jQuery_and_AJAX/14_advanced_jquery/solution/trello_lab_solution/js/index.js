$(".list button").click(function(event) {
  var button = $(event.target);
  var list = button.parent();
  var input = button.next();
  var nextTaskText = input.val();
  list.append($("<li>").text(newTaskText));
});

