Intro to HTML
=============

Marking Up Content
------------------

HTML is designed to surround pieces of content. Let's start with the following copy:

	General Assembly offers Classes and Workshops Worldwide
	
	For Immediate Release
	
	General Assembly, which started in New York as a startup incubator, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:
	
	Berlin
	Boston
	Hong Kong
	London
	Los Angeles
	New York City
	San Francisco
	Sydney
	Washington D.C
	
	For more information, visit General Assembly's website.

Read it over and think about what you might call different parts of the text.

---

How might you describe the piece of text reading "General Assembly offers Classes and Workshops Worldwide"?

---

What is this?

	General Assembly, which started in New York as a startup incubator, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:

---

What would you call this?

	Berlin
	Boston
	Hong Kong
	London
	Los Angeles
	New York City
	San Francisco
	Sydney
	Washington D.C

---

HTML provides "tags", which are used to mark up pieces of content. For example:

```html
<p>General Assembly, which started in New York as a startup incubator, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:</p>
```

And voilà, we have used HTML to describe this bit of text as a **paragraph**.

---

Things to Notice

1. This paragraph of text, when marked up, is surrounded by two tags: an opening tag and a closing tag.
2. In HTML, all tags are enclosed in < and > brackets.
3. For a paragraph, the opening tag is `<p>`.
4. The closing tag is `</p>`. Most tags in HTML work this way.

---

Look again at the first line, which reads,

	General Assembly offers Classes and Workshops Worldwide.

That doesn't seem like it would be a paragraph, it looks like it serves as a title. In HTML, there are tags reserved for this called "heading" tags. The most important one is `<h1>`.

```html
<h1>General Assembly offers Classes and Workshops Worldwide</h1>
```

---

There are 6 levels of headings available in HTML, `h1` through `h6`, with `h1` being the most important, and `h6` being the least important.

With that in mind, let's consider this line:

	For Immediate Release

That looks like it might serve as a subtitle, a heading less important than the first.

Given what you know, how do you think we might mark up "For Immediate Release"?

---

*Wait for it...*

---

That's right!

```html
<h2>For Immediate Release</h2>
```

---

Let's look at what we have so far:

```html
<h1>General Assembly offers Classes and Workshops Worldwide</h1>

<h2>For Immediate Release</h2>

<p>General Assembly, which started in New York as a startup incubator, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:</p>

Berlin
Boston
Hong Kong
London
Los Angeles
New York City
San Francisco
Sydney
Washington D.C

For more information, visit General Assembly's website.
```

---

What about that last sentence?

	For more information, visit General Assembly's website.

It looks like another body paragraph. Let's mark it up just like we did the previous one.

---

```html
<h1>General Assembly offers Classes and Workshops Worldwide</h1>

<h2>For Immediate Release</h2>

<p>General Assembly, which started in New York as a startup incubator, now offers classes and workshops in technology, design, and entrepreneurship, with campuses around the world in:</p>

Berlin
Boston
Hong Kong
London
Los Angeles
New York City
San Francisco
Sydney
Washington D.C

<p>For more information, visit General Assembly's website.</p>
```

---

TK List stuff.