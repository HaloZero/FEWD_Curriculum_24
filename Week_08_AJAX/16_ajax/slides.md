![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - APIs

###Rohan Dhaimade

---


##Agenda

* Review of JSON
* APIs
* AJAX

---

## How does it work? Syntax

![GeneralAssemb.ly](../../img/unit_1/json-example.png)

JSON consists of __keys__ that can be used to get __values__

Keys and values are separated by a __:__

Multiple keys & values are separated by a __,__

```
  var json = {
    "name": "David",
    "person_slayed": "Goliath"
  }
```

---

## What are keys and values?

Keys must be strings

Values can anything

* Strings
* Numbers
* Arrays
* Other JSON


How do you know which is which?

```
  var json = {
    "names": ["David", "June"],
    "count": 2,
    "key-can-be-any-string": "doesn't matter",
    "more_JSON":
      {
        "just_more_json" : "whee"
      }
    }
  }
```

---

## How to access JSON values using keys

```
  var aJsonObject = {
    "names": ["David", "June"],
    "count": 2,
    "key-can-be-any-string": "doesn't matter",
    "more_JSON":
      {
        "just_more_json" : "whee"
      }
    }
  }
```

```
	var names = aJsonObject["names"];
  console.log(names); // prints out ["David", "James"]
```

```
  var moreJSON = aJsonObject["more_JSON"];
  console.log(moreJSON);
  // prints out {
  //      "just_more_json" : "whee"
  //    }
```

```
  var results = moreJSON["just_more_json"];
  console.log(results); // prints out "whee"
```

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

JSON Quiz

---

## APIs

APIs are basically websites in which instead of returning HTML, will return JSON. They use the same format as requesting HTML pages, but return JSON

---

## How a URL works

http://www.rottentomatoes.com/search/?search=captain+america

1. Url consists of a protocol: __http://__
2. A path __www.rottentomatoes.com/search/__
3. Parameters __search=captain+america__

<br>
The __?__ separates the __path__ from the __parameters__!
---

## APIs

APIs work by you typing in a URL. This has two parts that we care about:

1. Endpoint (the url path)
2. Parameters

The endpoint is the url at which the API resides.

Parameters are used to modify what data you want back.

---

## Example

OMDB API

URL for the API:
http://www.omdbapi.com/

Parameters include:

* s = search parameter
* type = type of movie

The API documentation should specify what parameters are.

---

## PostMan

Go to the Chrome extension store and install the chrome extension Postman

After you install it, you can access it at chrome://apps

Or there should be an Apps bookmark in the top left of Chrome

---

## Let's play with the APIs

1. Find me all movies with the word 'Lego'
2. Find me all movies with the word 'Lego' released in 2013
3. Find me all TV series that have the word 'star'

---

## AJAX!

AJAX stands for Asynchronous Javascript and XML

Before AJAX every time you would have to refresh a page for every action

---

## How do we retrieve things?

Here's how you really do you AJAX!

```
var xmlhttp;

if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 ) {
       if(xmlhttp.status == 200){
           document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
       }
       else if(xmlhttp.status == 400) {
          alert('There was an error 400')
       }
       else {
           alert('something else other than 200 was returned')
       }
    }
}

xmlhttp.open("GET", "ajax_info.txt", true);
xmlhttp.send();
```

---

## jQuery AJAX

Kidding! jQuery makes it easier

```
  $.getJSON('http://www.omdbapi.com/?s=breaking+bad', function(responseJSON) {
      // this is the function you call when the data comes back
  });
```

$.getJSON takes in 2 arguments

1. The url
2. The function to call when the data comes back

---

## Lab

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

OMDB API

