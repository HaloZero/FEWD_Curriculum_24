// use this JSON to fill in the HTML fields!
// use the example to see what it's supposed to look like

$.getJSON('https://itunes.apple.com/search?term=abba', function(musicPlaylist) {
  console.log(musicPlaylist);
});
