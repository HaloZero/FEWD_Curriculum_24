![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced jQuery

###Rohan Dhaimade
.

---


##Agenda

*	Review of jQuery
* Event Objects
* Traversing


----

##Review

Remember, in jQuery, you must target something or else your script is for naught!

You can target a tag, ID, or class. Remember, the selector goes at the beginning of your jQuery statement:

```
$("#id-here")
$(".class-here")
$("p")
```

---

##Useful Functions##

If you wanted to add an attribute to an element, you would use .attr:

```
  $("li.menu").attr("class", "open");
```

The syntax when using .attr is: .attr("attributename", "value");

---

##Useful Functions##

To show and hide elements on the page you can use

```
.show()
.hide()
.toggle()
```

These are the equivalent of setting display: block (show) and display: none (hide) in CSS.

---

##Useful Functions##

Toggle will automatically switch beween hiding and showing for you.

```
.toggle()
```

---

##Useful Functions##

Some basic animation

Sliding things up and down:

```
.slideUp()
.slideDown()
.fadeIn()
.fadeOut()
```

What is this actually doing? It's just modifying the CSS for you!

---

##Useful Functions##

```
.slideToggle()
.fadeToggle()
```

Works the same way as toggle. But will do the animation!

---

##jQuery Returns Arrays

$("a") will return all HTML elements with a a tag

```
$("a").removeClass('active')
```

This will magically remove 'active' class to each element.

---

## Event Target ##

The function that you pass into click gives you access to an event object

```
$("#some-id").click(function(event) {
  $(event.target).text("Hello");
});
```

So in this case $(event.target) will be $(#"some-id");

---

## Code Along ##

Demonstrate how we can use this to simplify jQuery basic tabs.

---

## Event Propogation ##

You can stop an event from continuing on it's normal practice.

```
#("a").click(function(event) {
  event.stopPropogation();
}
```

What do you use it for:

* Stopping links from going to different URLs (HTML fallback)
* Stopping forms from submitting

---


Lab: Trello example
You have multiple lists, and you have one working.
The input on the bottom adds elements, but we need to hard code ids. Yuck.

So this demonstrates: Creating nodes (might be too much). Creating list items.
The next button is close to my input tag, how do I get it from there instead of having to search the DOM for it.
How do I get my list object so I know where to add things.

Another idea:
  What if we just want to delete objects only. How do I get this working? I could hard code the ids.








