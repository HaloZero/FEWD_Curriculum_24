![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - JSON

###Rohan Dhaimade

---


##Agenda

* Review of jQuery Extra!
* What is a dictionary?
* JSON


---

## Creating HTML

```
 var anchorTag = $("<a>");
 anchorTag.text('Hello'); // changes text to Hello
 anchorTag.attr('href', 'http://www.hello.com/'); // changes attribute
```

---

## Event Target

$("img").click(function(event) {
  $(event.target) == $(img);
});