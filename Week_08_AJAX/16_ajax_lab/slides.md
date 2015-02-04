![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - AJAX

###Rohan Dhaimade

---


##Agenda

* Review of API & AJAX
* Misc: Scope
* Misc: Async

---

## APIs

APIs work by you typing in a URL. This has two parts that we care about:

1. Endpoint (the url path)
2. Parameters

The endpoint is the url at which the API resides.

Parameters are used to modify what data you want back.

---
 
## AJAX!

AJAX stands for Asynchronous Javascript and XML

Before AJAX every time you would have to refresh a page for every action

---

## jQuery AJAX

Kidding! jQuery makes it easier

```
  $.getJSON('http://www.omdbapi.com/?s=breaking+bad', function(responseJSON) {
      // this is the function you call when the data comes back
      console.log(responseJSON);
  });
```

$.getJSON takes in 2 arguments

1. The url
2. The function to call when the data comes back

---

## Scope 

```
  $.getJSON('http://www.omdbapi.com/?s=breaking+bad', function(responseJSON) {

  });
  console.log(responseJSON); // THIS DOESN'T WORK!
```

Variables inside functions only exist inside that function. Variables cannot move outside the function. 

---
## Asynchronous 

```
  // doesn't work!
  var thisIsNotJSON = $.getJSON('http://www.omdbapi.com/?s=breaking+bad', function(responseJSON) {
  	  // this is the only place 
      console.log(responseJSON);
  });
  console.log(thisIsNotJSON);
```

Asynchoronous requests do not return their results immediately, they only return their results to their callback function

---

## Lab

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)

iTunes Artist

