![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - JSON

###Rohan Dhaimade

---


##Agenda

* Review of jQuery Extra!
* JSON


---

## Creating HTML

Creating HTML tags in jQuery uses the syntax "<tag_you_want_to_create>".

Important the __<__ __>__ make it different

```
 var anchorTag = $("<a>");
 anchorTag.text('Hello'); // changes text to Hello
 anchorTag.attr('href', 'http://www.hello.com/'); // changes attribute
```

---

## Event Target

```
$("img").click(function(event) {
  $(event.target); // event.target is the thing you clicked on
});
```

---

## Tree Traversal

```
<ul>
  <li class="menu-item">Something</li>
  <li>Something else</li>
</ul>
```

```
  $(".menu-item").prev(); // returns nothing
```

```
  $(".menu-item").next(); // returns <li>Something Else</li>
```

```
  $(".menu-item").parent() // returns <ul>
```

---

## Tree Traversal Cont.

```
<ul>
  <li class="menu-item">Something</li>
  <li>Something else</li>
</ul>
```

```
$("ul").find("li"); // will return all li inside of a ul
```

---

## What is a JSON and why do I care?

__JSON__ stands for Javascript Object Notation

This is the language of the web, lots of different websites communicate to other websites in this format.

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

## Lab - Spotify Playlist

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

