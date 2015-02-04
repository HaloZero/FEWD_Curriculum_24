$("#submit-button").click(function() {
  var artistSearch = $("input").val();
  var url = "https://itunes.apple.com/search?term="+artistSearch;
  $.getJSON(url, function(musicPlaylist) {
    musicPlaylist['results'].forEach(function(song, index) {
      var songContainer = $('.song').eq(index);
      songContainer.find('img').attr('src', song['artworkUrl100']);
      songContainer.find('.title').text(song['trackName']);
      songContainer.find('.artist_name').text(song['artistName']);
      songContainer.find('.track_price').text(song['trackPrice']);
      songContainer.find('a').attr('href', song['previewUrl']);
    });
  });
});