![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - APIs

###Rohan Dhaimade

---


##Agenda

* Review of JSON
* APIs

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
  console.log(names);
  // prints out ["David", "James"]
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
  console.log(results);
  // prints out "whee"
```


---

## APIs

APIs are basically websites in which instead of returning a web page, will return JSON.

---

## APIs

APIs consist of two parts
- Base URL
- Parameters

URL is the basic URL in which APIs will exist

Parameters are used to modify what data you want back.

---

## PostMan

Go to the Chrome extension store and install the chrome extension Postman

After you install it, you can access it at chrome://apps


---

Let's play with the iTunes API









---
## Lab - Spotify Playlist

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

