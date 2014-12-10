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
*	Relies on a container of fixed width
*	Usually 960px or 980px

---

##Responsive Layout

*	Different styles for different screen widths
*	Uses an elastic/fluid layout
*	Sized in percentages
*	Elastic
*	Sized in ems

---

## Why learn responsive design?

The use of mobile devices - phones and tablets - has risen exponentially in the last few years. It's no longer enough to just design a desktop experience for people. More and more people are consuming the internet via tiny screens, and think about how different (and harder) it can be to use a website on a smaller screen.

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

##Going Responsive

There are a few techniques used in responsive design:

* Using percentages instead of pixels
* Using ems instead of pixels for font-size
* Using media queries to determine your screen sizes

---

##EMS vs REMs

__EM__
Sized based on the width of the letter “m” 
Same as percentages*
1em=100% font-size
http://alistapart.com/articles/howtosizetextincss
Based on parent
Parent{ font-size:16px;}
Child{font-size:2em;}
Child’s font size is 32px

__REM__

“Root” em
Same as em
Caveat: Based on the font-size of html element


<aside class="notes">
Some browsers have issues with fonts sized in percents

</aside>

---


#Media Queries

---

##Media Queries - what should be in code?

@media only screen and
(max-width: xPx)
(min-width: xPx)
(max-device-width:xPx)
(min-device-width:xPx)

For iPad
(orientation: portrait)
(orientation: landscape)

Separate multiple clauses with “and”

---

##Mobile Display

<meta name="viewport" content="width=device-width, initial-scale=1">
Optional: user-scalable=none

<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=none">



Why necessary?
Mobile browser assumption of fixed layout of 980px
Standard media queries sizes
Small: up to 768px
Medium: 768-991px
Large: 992px+

<aside class="notes">

</aside>

---

##Usage

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

If I put the media query before .box{float:left;} will this work as expected?

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Responsive Boxes

---


##Optional

Grid layouts
Transition (make media query changes smoother)

---

##Homework

- Start thinking about how to make 	