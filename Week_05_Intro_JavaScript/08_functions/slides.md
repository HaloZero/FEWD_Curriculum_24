![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Functions


Conjunction junction, what's your function?

---

##Variables

What are variables?

* Programs often work with values, that we want to save and keep.
* The entity we use to store the value is called a variable.

![GeneralAssemb.ly](../img/var-syntax.png)

---

##DOM

Vocabulary __DOM__: Document Object Model

You can access the HTML in JS by using:
```
  document
```

---
##Functions!

Functions are the worker bees of the programming world. They are a nice object that you can put commands in, and you can fire these functions by calling them in a script.

---

##Functions!

As a general rule of thumb:

* Make your function names descriptive. It's OK if they're several words in camel case. You want to know what that function is for and you might not remember the next hour/day/week/month/year.
* Make your functions do only one thing. It will make debugging easier down the road. It's OK if you write six separate functions that do six things as opposed to one giant function that's trying to do all six things.

---

##Function Syntax

```
function nameOfFunction(){
  //What's my function doing?
}
```

---

##Calling a Function

You fire off a function with a listener:

```
document.getElementById('listener').click = myFunction;

function myFunction() {
  alert("You fired my function!");
}
```

---


##Calling a Function

When you call a function, it  executes the commands that are inside the function. Sometimes you have one function (say, a function that resets all your fields) that you want to recycle over and over again. You can call that function within another function.

```
function changeSomething() {
  reset();
  document.getElementById('box') = 'something';
}

function reset() {
  document.getElementById('box').value = '';
  document.getElementById('box2').value = '';
}
```

---

##Passing Arguments

Functions are a sophisticated type of container. Not only can you perform tasks with them, you can also pass *arguments* to a function so it can work with specific data.

---

##Passing Arguments

You've noticed that function names are followed by arguments:

```function myFunction()```

These parentheses are where you can pass parameters:

```function myFunction(a,b)```

This now means that myFunction can work with some data that has been put in the a and b containers.

---

##Return in JS

Remember, a function is just a fancy container. It doesn't have to always print out the result of the function. It can hold a value too!

To hold a value, you use the *return* command:

```
function doMath(a, b) {
  c = a + b;
  return c;
}
```

---

##Return in JS

In the previous example, the line   ```return c;``` simply holds the value of ```doMath```. It doesn't automatically print it out. This is useful because I could use that value in a different function if I wanted to.

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Review: Make a Better Theme Switcher

---

##Anonymous Functions

So far, most functions you've learned about are named. This is mainly because you want to call a specific function at a specific time, especially if you have a bunch of functions written. But there is another type of commonly used function: the *anonymous function*.

It looks like this:

```
function(){
  //do something here
}
```

---

##Why Anonymous Functions?

Anonymous functions are meant to fire immediately, and they usually fire once. Often times, they're meant to fire as soon as a page is loaded.

They can also be assigned to a variable. (Remember, a function is just a giant container that can return a value).

This sometimes happens when it's not necessary to write a listener and you need the function to do only one thing.

---

##Why Anonymous Functions?

We'll cover anonymous functions more in jQuery. jQuery uses them all the time.

<br>
They're mainly used as __callbacks__.

Callbacks are functions that are called once a series of actions are done. ex. when a page is loaded, or when a AJAX request is finished and comes back with data from the server

---

##Anonymous Functions Syntax

```
document.addEventListener("DOMContentLoaded", function(event) {
  // let's do some stuff!
}
```

This is equivalent to saying

```
var doStuffWhenEverythingIsReady = function(event) {
  // let's do some stuff!
}

document.addEventListener("DOMContentLoaded", doStuffWhenEverythingIsReady);
```

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Rock Paper Scissors