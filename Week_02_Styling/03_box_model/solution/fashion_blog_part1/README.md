Fashion Blog Alpha
==================

We'll be working on this site over the period of three classes, just a heads up.

For today, we'll be making a simplified version of the site which uses only one column. Take a look at the reference site, and the COPY document. Your job is to build out the HTML and CSS for the page!


Fonts
-----

On this site, we'll be using a font from Google Fonts called Lato.

Stick this line in your `<head>` *before* your usual stylesheet `link`:

	<link href='http://fonts.googleapis.com/css?family=Lato:300,700,300italic,700italic' rel='stylesheet' type='text/css'>

In other words, it'll be placed something like, in the `<head>`:

	<head>
		<meta charset="utf-8">
		<title>Sartre’s List</title>
		<link href='http://fonts.googleapis.com/css?family=Lato:300,700,300italic,700italic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css">
	</head>
	
Once this `link` is there, you'll be able to use the following `font-family` in your CSS:
	
	font-family: 'Lato', sans-serif;

The whole page is set in this font (hint hint).


Colors
------

The red color for links is #D00. On hover, they turn to #A00.

There are a slew of grays being used on the page, including (from lightest to darkest):

```
#EEE
#DDD
#CCC
#BBB
#444
```