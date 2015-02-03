// Let's play with json
// this is a JSON example pulled from the rotten tomatoes api

var movieJSON = {
  "id": 770672122,
  "title": "Toy Story 3",
  "year": 2010,
  "genres": [
    "Animation",
    "Kids & Family",
    "Science Fiction & Fantasy",
    "Comedy"
  ],
  "mpaa_rating": "G",
  "runtime": 103,
  "synopsis": "Pixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, Rovi",
  "posters": {
    "thumbnail": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
    "profile": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
    "detailed": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg",
    "original": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg"
  },
  "abridged_cast": [
    {
      "name": "Tom Hanks",
      "characters": ["Woody"]
    },
    {
      "name": "Tim Allen",
      "characters": ["Buzz Lightyear"]
    },
    {
      "name": "Joan Cusack",
      "characters": ["Jessie the Cowgirl"]
    },
    {
      "name": "Don Rickles",
      "characters": ["Mr. Potato Head"]
    },
    {
      "name": "Wallace Shawn",
      "characters": ["Rex"]
    }
  ]
};

// Questions
// What type of object does movieJSON['genres'] print out?
// What type of object does movieJSON['year'] print out?
// What type of object does movieJSON['abridged_cast'] print out?

// console.log the runtime of the movie
// console.log the genres of the movie

// console.log the URL of the original poster image by using Javascript

// console.log the name of 2nd actor in movie by using Javascript

// Extra credit:
// console.log the list of names of each actor using forEach