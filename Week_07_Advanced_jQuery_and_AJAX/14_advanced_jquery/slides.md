![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced jQuery

###Rohan Dhaimade

---


##Agenda

*	Review of jQuery
* Creating HTML
* Event Objects
* Traversing


---

##Review

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
$("p").show()
$("p").hide()
$("p").toggle()
```

These are the equivalent of setting display: block (show) and display: none (hide) in CSS.

---

##Useful Functions##

Toggle will automatically switch beween hiding and showing for you.

```
$("p").toggle()
```

---

##Useful Functions##

Some basic animation

Sliding things up and down:

```
$("p").slideUp()
$("p").slideDown()
```

Fading in and out:

```
$("p").fadeIn()
$("p").fadeOut()

```

What is this actually doing? It's just modifying the CSS for you!

---

##Useful Functions##

```
$("p").slideToggle()
$("p").fadeToggle()
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

## Code Along ##

![GeneralAssemb.ly](../img/icons/code_along.png)

---

## Creating HTML in jQuery ##

You can create some basic HTML elements in jQuery!

You can then put it into your HTML!

```
var anchorTag = $("<a>").text('Hello');
$("body").append(anchorTag);

```

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

## Traversing the Tree ##

The first method of traversal is using .prev() and .next().

This looks at the first selector you declared and then selects the next tag or previous tag from the one you've selected

---

## Traversing the Tree ##

For instance your HTML is

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

## Lab ##

For the lab, take the code along and do the following things:

1) When you add an item fade it in
2) Create some HTML that keeps track of the number of items at the bottom of the list

Extra Credit:
3) When you click an item, make it delete

