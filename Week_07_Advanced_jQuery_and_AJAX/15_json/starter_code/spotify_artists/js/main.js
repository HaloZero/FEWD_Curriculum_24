var spotifyPlaylist = {
  'songs': [
    {
      'artist': 'ABBA',
      'name': 'Dancing Queen',
      'image': 'http://www.abbafanatic.com/communities/9/004/006/295/159/images/4527007902.jpg',
      'track_preview_url': 'https://p.scdn.co/mp3-preview/012502941161f69d6dc62d1b0f29bf9df88dbbb7',
      'popularity': 65
    },
    {
      'artist': 'ABBA',
      'name': 'Mamma Mia',
      'image': 'http://image.mp3.zdn.vn/covers/8/2/824ae0e48db46146ba36004f17cde258_1337240318.jpg',
      'track_preview_url': 'https://p.scdn.co/mp3-preview/7e2f07194fb4805c4ad3096caada97d6e47c71ef',
      'popularity': 65
    },
    {
      'artist': 'ABBA',
      'name': 'The Winner Take it All',
      'image': 'http://en.academic.ru/pictures/enwiki/87/Winner_Takes_It_All.jpg',
      'track_preview_url': 'https://p.scdn.co/mp3-preview/ef953001a1514d0af794c7d35d4dcbf96447b46c',
      'popularity': 59
    },
    {
      'artist': 'ABBA',
      'name': 'Does Your Mother Know',
      'image': 'https://i.scdn.co/image/e572d9826f2f90396243eeb8724e25a0ca390206',
      'track_preview_url': 'https://p.scdn.co/mp3-preview/b617fd41965187bd5a3c0ad9e75d0504fd275341',
      'popularity': 56
    }
  ]
};

spotifyPlaylist['songs'].forEach(function(song, index) {
  var songContainer = $('.song').eq(index);
  songContainer.find('img').attr('src', song['image']);
  songContainer.find('.title').text(song['name']);
  songContainer.find('.artist_name').text(song['artist']);
  songContainer.find('popularity').text(song['popularity']);
  songContainer.find('a').attr('href', song['track_preview_url']);
});