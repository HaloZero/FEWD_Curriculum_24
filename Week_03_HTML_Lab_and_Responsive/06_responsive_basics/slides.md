![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#FEWD - Responsive Basics 

###Rohan Dhaimade

Screen goes long, screen goes short, screen goes long, screen goes short.

---


##Agenda

*	Review
*	Responsive Layouts
*	REM/EM
*	Media Queries

---


##Review

Floats!

---

##Objectives

* Identify elements of responsive design vs non-responsive designs
* Utilize relative size properties instead of pixels
* Use media queries to create a responsive website

---

## Responsive Design

Me: 500 in Web Buzzwords Trebek.

Question: What is responsive design?

A: What is a design that responds differently to screen sizes in order to provide the best user experience?

---

##Fixed Layout

*	Used up to this point
*	Relies on a container that has a fixed width
*	Usually 960px or 980px

---

##Responsive Layout

*	Different styles for different screen widths
*	Uses an elastic/fluid layout
*	Sized in percentages
*	Elastic
*	Sized in ems

--- 

## Fixed vs Responsive

Fixed sites

* [UPS](http://www.ups.com/)
* [Whitehouse.gov](http://www.whitehouse.gov/)

---

## Fixed vs Responsive 

Responsive sites

* [General Assembly](https://generalassemb.ly)
* [Dwolla](https://www.dwolla.com/)
* [Sweet Hat Club](http://www.sweethatclub.org/)
* [Sasquatch Festival](http://www.sasquatchfestival.com/)

--- 

## Why learn responsive design?

The use of mobile devices - phones and tablets - has risen exponentially in the last few years. It's no longer enough to just design a desktop experience for people. More and more people are consuming the internet via tiny screens, and think about how different (and harder) it can be to use a website on a smaller screen.

---

##Going Responsive

There are a few techniques used in responsive design:

* Using percentages instead of pixels
* Using ems instead of pixels for font-size
* Using media queries to determine your screen sizes

---

## Responsive Layout

![GeneralAssemb.ly](../../img/icons/code_along.png)
---

##EMS

__EM__

* Sized based on the width of the letter 'm' 
* Same as percentages
* 1em=100% font-size
* Base size is based on parent font-size

--- 

##EMS

Remember to think of them as percentage relative to the parent.

```
	<body>	
		<h1>This is my big text</h1>
		<h2>This is smaller text</h2>
	</body>```

``` 
body {
	font-size: 16px;}

h1 {
	font-size: 2em;
	/// The size is 200% * base font-size:
	//  Thus, the size is equivalent to 32px}

h2 {
	font-size: 1.5em;
	/// What is the size in pixels of h2?}
```

There is a nifty converter here: http://pxtoem.com/

More information: http://alistapart.com/articles/howtosizetextincss

---

#Media Queries

---

##Media Queries - what should be in code?

```
@media only screen and
(max-width: xPx)
(min-width: xPx)
(max-device-width:xPx)
(min-device-width:xPx)

For iPad
(orientation: portrait)
(orientation: landscape)
```

Separate multiple clauses with "and"

---

##Mobile Display

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Optional: user-scalable=none

```
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=none">
```


Why necessary?
Mobile browser assumption of fixed layout of 980px

---

##Mobile Display

Standard media queries sizes:

* iPhone portrait: 320px max width
* iPhone 4/4s landscape: 480px max width
* iPhone 5 landscape: 568px max width
* iPad portrait: 768px max width
* iPad landscape: 1024px max width

931px is also a common breakpoint, as it is applicable to many Android tablets.
Standard media queries sizes

---

##Usage

```
/*float boxes into columns*/
.box{
	float:left;
}
@media only screen and (max-width:768px){
	/*insert responsive css here
	ex: stack floated boxes
	*/
	.box{
		float:none;
	}
} 
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Responsive Boxes

---

##Homework

- Start thinking about your final project. I would like to see a basic wireframe after the break. 
- Make the lab that you finished last class responsive! Up to you on the design.