![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Box Model & More CSS

###Instructor Name

Instructors current role.

---


##Agenda

*	Review
*	Box Model
*	Nested Selectors
*	HTML Template
*	Lab Time
	*	How To Start

---

##Objectives

- Explain the box model and how it affects styling
- Utilize nested selectors for advanced styling
- Learn new strategies for starting a project

---

##Review

What do students need help with?

---

##Box Model

Every element in web design is a box.

---


##Box Model

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)

---

##Box Model

###Width = width + padding-left + padding-right + border-left + border-right

###Height = height + padding-top + padding-bottom + border-top + border-bottom

Way to remember: When you measure a box for shipping. you include thickness of the cardboard, you include any extra space inside.

---

##Box Model

When writing padding or margin rules in CSS, there are some shortcuts:

- margin: 10px; means that your box will have a margin of 10 pixels on all four sides.
- margin: 5px 10px; means that your box will have a margin of 5 pixels at the top and bottom, and 10 pixels on the right and left. (In this shortcut, the first number always applies to top and bottom, and the second number always applies to left and right.)
- margin: 5px 10px 6px 12px; means your box will have a margin of 5 pixels on top, 10 pixels on the right, 6 pixels on the bottom, and 12 pixels to the left.

---


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Box Model

---

##Nested Selectors

A nested selector allows you style elements with more specifics rules.

---

###Nested Selectors

For instance, you might have a ```<blockquote>``` on your page. Sometimes this blockquote has many paragraphs (```<p>``` tags) within it. You might have an overall style set for your p tags, but you want the p tags within your blockquote to look different than the other p tags. You do this by using nested selectors.

In HTML, your code might look like this:

    <blockquote>>
      <p>Some paragraph here</p>
    </blockquote>

---

##Nested Selectors

If you write a CSS rule for a nested selector, you list the outer tag first, then the second tag (the nested tag or selector) next. Like this:


```
blockquote p {
    color: #999999;
    font-style: italic;
    font-weight: bold;
    margin: 12px 40px;
}
```

---
![GeneralAssemb.ly](../../img/icons/code_along.png)
##Nested Selectors

---
##Classes and Ids

With classes and ids, we can organize how we manipulate elements on a page.

You can add a class or an ID to any HTML tag. This can allow customized styling to that element

---

##Classes and Ids

###Ids are unique

You add an id to an item that will only be used once on a page (headers, footers, etc). This will be important for javascript and dynamic programming.


### Classes are for organizing

You can re-use classes, you can add it to any element regardless of what tag it's applied to. This becomes handy when you want to style common things (example: buttons on a page)

---

##Classes and Ids

![](../../img/unit_1/tags_attributes.png)

---

##Classes and Ids

HTML example

    <p class='slanted-paragraph'>
      We want text inside slanted paragraphs, to be italics
    </p>

CSS

    .slanted-pargraph {
      font-style: italic;
    }

This will make any element with the class 'slanted-paragraph' have italics font. But only those, it will not affect all paragraphs. So if you want multiple slanted paragraphs on a page, you only have to make one css rule.

---

###Getting Started

How do you get started?

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Fashion Blog

---

