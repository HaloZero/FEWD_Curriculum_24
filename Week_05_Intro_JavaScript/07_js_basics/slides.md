![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - JS Basics

###Rohan

It's time for the fun part.

---

##Agenda

*	What does JS do?
* JS Syntax
*	Variables
*	Arithmetic
*	Conditionals

---

Arthur C Clarke:

'Any sufficiently advanced technology is indistinguishable from magic'

---

##What does JS Do?

JS is a programming language.

It can:

* Remember what you've done before (this is called state)
* Do calculations (math, control flows)
* It can help you request things from a server
* Manipulate HTML
* You can create 3d games!

---
##JS Basics Syntax

__Syntax:__ Spelling and grammar rules of a programming language.

Note:
Like with any language, there are formal rules around how to write it. This is the syntax.


---

##JS Syntax

*	Semicolon
*	Brackets
*	Parentheses
*	Quotation Marks

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Theme Switcher

---

##Variables

What are variables?

* Programs often work with values, that we want to save and keep.
* The entity we use to store the value is called a variable.

![GeneralAssemb.ly](../img/var-syntax.png)

---

##Variables

You can do three things with variables:

* __Declaring__ variables means creating new ones.

```
	var favoriteMuppet;
```

* __Assigning__ variables means assigning a variable a new value;

```
	favoriteMuppet = 'Fozzie Bear'
```

* __Accessing__ a variable is using the value in that variable later

```
	console.log("Rohan's favorite muppet is " + favoriteMuppet);
```

You can combine declaring and assignment into one statement

```
	var favoriteMuppet = 'Gonzo';
```

---

##Variable Conventions

*	Variables start with a lower case letter

*	If they contain multiple words, subsequent words start with an upper case letter.

```
	var numberOfStudents = 10;
```

---

##Variables & Data Types

What can you store in a variables?


Note:

##Data Types

The types of different values we support include:

*	__String__ text
*	__int__, __float__ numbers
*	__Boolean__ true or false

---


##Strings

*	Stores textual information
*	String literal is surrounded by quotes

```"How is the weather today?"```

```'Warm'```

---

##Strings

Double vs single quoted strings:

'They "purchased" it'

"It's a beautiful day"

---

##Strings
Escaping
"They \"purchased\" it"

'It\'s a beautiful day'

---

##Numbers

Represent numerical data

int:         42

float:      3.14159265

---

##Numbers

Signed

int:         +6

float:      -8.2

Can perform arithmetic on number data types

---

##Conversion: String To Number

```
var intString = "4";
var intNumber = parseInt(intString, 10);
var floatString = "3.14159";
var floatNumber = parseFloat(floatString);
```

Note:
Why would you need to convert datatypes?

---

##Conversion: Number To String

```
var number = 4;
number.toString(); => "4"
```

__OR__
```
number + ""; => "4"
```

Note:
Why would you need to convert datatypes?

---

##Arithmetic In JavaScript

![](../img/unit_1/arithmetic.jpg)

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Score Keeper

---

##Conditionals

![](../img/unit_1/cfDiagram.png)

---

##Making Decisions

It's either TRUE or FALSE (like booleans)

If you are greater than 18
you are an adult

	if (age > 18){
		document.write("You are an adult");
	}

---



##Comparisons - Equality

Are two things equal?

```
10 === 10 //true
10 === 5 //false
"hi" === "hi" //true
```
---


##Logical Operators

![](../img/unit_1/logical_operators.png)

---

##Conditional Syntax

```
if(condition is true) {
	//Do cool stuff
}
```

---

##Conditional Syntax

```
	if(condition is true) {
		//Do cool stuff
	}else{
		//Do other cool stuff
	}
```

---

##Conditional Syntax

```
	var topic = "JS";
	if (topic == "JS") {
		console.log("You're learning JavaScript");
	} else if(topic == "JavaScript") {
		console.log("You're still learning JavaScript");
	} else {
		console.log("You're learning something else");
	}
```

---

##Multiple Conditions

```
if (name == "GA"  && password == "YellowPencil"){
	//Allow access to internet
}
```

---


##The Truth Table

```
if (name == "GA"  && password == "YellowPencil"){
	//Allow access to internet
}
```

---

##The Truth Table

![](../img/unit_1/and_table.png)

---

##The Truth Table

```
if (day == "Tuesday"  || day == "Thursday"){
	//We have class today
}
```

---

##The Truth Table

![](../img/unit_1/or_table.png)

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Compare That

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Temperature Converter
