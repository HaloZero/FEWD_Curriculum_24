// use this JSON to fill in the HTML fields!
// use the example to see what it's supposed to look like

var musicPlaylist = {
  'songs': [
    {
      'artistName': 'ABBA',
      'trackName': 'Dancing Queen',
      'image': 'http://www.abbafanatic.com/communities/9/004/006/295/159/images/4527007902.jpg',
      'previewUrl': "http://a1029.phobos.apple.com/us/r1000/051/Music4/v4/6a/76/11/6a761195-efb2-a649-ae5a-6e3f9b74f2e1/mzaf_2735411689193600746.plus.aac.p.m4a",
      'trackPrice': 1.29
    },
    {
      'artistName': 'ABBA',
      'trackName': 'Mamma Mia',
      'image': 'http://image.mp3.zdn.vn/covers/8/2/824ae0e48db46146ba36004f17cde258_1337240318.jpg',
      'previewUrl': 'http://a638.phobos.apple.com/us/r1000/032/Music/v4/f2/b9/e7/f2b9e7fb-820c-2c0f-90af-110c5d8b47f4/mzaf_4774072711931856116.plus.aac.p.m4a',
      'trackPrice': 0.99
    },
    {
      'artistName': 'ABBA',
      'trackName': 'The Winner Take it All',
      'image': 'http://en.academic.ru/pictures/enwiki/87/Winner_Takes_It_All.jpg',
      'previewUrl': 'http://a1433.phobos.apple.com/us/r1000/023/Music6/v4/92/7e/45/927e450f-2744-f8a4-3972-b04751ee309e/mzaf_189824385391134141.plus.aac.p.m4a',
      'trackPrice': 1.29
    },
    {
      'artistName': 'ABBA',
      'trackName': 'Take a Chance on Me',
      'image': 'https://i.scdn.co/image/e572d9826f2f90396243eeb8724e25a0ca390206',
      'previewUrl': 'http://a1889.phobos.apple.com/us/r1000/023/Music/v4/15/84/c1/1584c1fc-687f-88d1-001f-468b26cc6a6e/mzaf_949527388120129365.plus.aac.p.m4a',
      'trackPrice': 1.29
    }
  ]
};

musicPlaylist['songs'].forEach(function(song, index) {
  var songContainer = $('.song').eq(index);
  songContainer.find('img').attr('src', song['image']);
  songContainer.find('.title').text(song['trackName']);
  songContainer.find('.artist_name').text(song['artistName']);
  songContainer.find('.track_price').text(song['trackPrice']);
  songContainer.find('a').attr('href', song['previewUrl']);
});