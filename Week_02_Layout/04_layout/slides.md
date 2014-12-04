![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Layout

###Rohan Dhaimade

---


##Agenda

*	Review
*	HTML5 Structural Elements
*	Floats
*	Lab Time

---

## Objectives ##

- Predict css styling that rely on inheritance
- Use HTML structural elements
- Utilize reset css
- Organize and use float for layout

---

##Review

Nested Selectors

---

##Selectors

Go until exercise 11, after that it's more advanced selectors

http://flukeout.github.io/

---

##CSS Inheritance

Some properties, by default will inherit from their ancestors or parent elements. Apply a font to the body, will give every element a font to that body.

Other properties that inherit:

<ul>
<li>color</li>
<li>font-weight</li>
<li>font-size</li>
<li>background-color</li>
<li>Usually any properties involving the font/text/color of things is inherited.</li>

---

##CSS Inheritance

What color will each of these be?

```
<h3>
	<a>Link 1</a>
</h3>

<a>Link 2</a>

<h3>Link 3</h3>
```

if these are the css rules:
```
a {
	color: green;
}

h3 {
	color: orange;
}
```

---

##HTML5 Structural Elements

Adding structure to HTML elements that are related to content layout.

*	header
*	aside
*	footer

---

###Reset CSS

CSS Resets are used to reduce browser inconsistencies in things like line-height, font-sizes, and margins.

Usually it's best to keep your reset css in a separate file and link it BEFORE your css.

```
<link rel="stylesheet" type="text/css" href="reset.css">
```

http://meyerweb.com/eric/tools/css/reset/


---

##Floats

Float is a CSS positioning property, used to layout a web page.

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)

Note:
Image from Chris Coyier's CSS-Tricks


---

##Floats

When you float something, you turn it into an __inline__ element. So it will become as big as it needs to be and won't cause new lines anymore.

---

##The Clear Property

clear has four properties: left, right, both, or none

It tells any elements floated to clear way and create a new line for any other floated elements.

---

##Clearfix

clearfix is a bit of misnomer. What it does it tells a container element to accomodate the height/width of all the floated elements inside of it.

```
.clearfix {
	overflow: auto;
	zoom: 1;
}
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Floating Sections

---



---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Layout Challenge

---
