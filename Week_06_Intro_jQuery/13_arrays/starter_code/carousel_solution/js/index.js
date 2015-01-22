var images = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg', 'images/food8.jpg'];

var currentIndex = 0;
$("#back-button").click(function() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  }
  $("#image-to-display").attr('src', images[currentIndex]);
  $(".progress-meter .progress").removeClass('active');
  $(".progress-meter .progress").eq(currentIndex).addClass('active');
});

$("#next-button").click(function() {
  if (currentIndex < images.length) {
    currentIndex = currentIndex + 1;
  }
  $("#image-to-display").attr('src', images[currentIndex]);
  $(".progress-meter .progress").removeClass('active');
  $(".progress-meter .progress").eq(currentIndex).addClass('active');
});

