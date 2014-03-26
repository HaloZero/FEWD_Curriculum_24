![GeneralAssemb.ly](../../img/icons/instr_agenda.png)


##Lesson 01 - HTML Basics

###LEARNING OBJECTIVES

*	Apply HTML tags ```<html><head><!DOCTYPE html><body>``` to a web page and experiment with html tags.

*	Describe the DOM and draw simple DOM tree.

*	Create and link an external style sheet.


###SCHEDULE


| Time        | Section| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:----------------|
| 10 min | [HTML Tag & CSS Selectors Review](https://github.com/generalassembly-studio/FEWD_2.0.0/blob/FEWD_2.0.1/Week_01_Basics/01_html_basics/README.md#html-tags--css-selectors-review) | N/A | Review basic rules about HTML tags and CSS element selectors. Students were introduced to selectors and tags in Dash. |
| 60 min | [Adding Structure](https://github.com/generalassembly-studio/FEWD_2.0.0/tree/FEWD_2.0.1/Week_01_Basics/01_html_basics#adding-structure) | GA Press Release | Basic site to review .html files and tags. Another great opportunity to show students how to use sublime text, and get everyone up to speed and ready to move forward.|
| 60 min | [External Style Sheets] (https://github.com/generalassembly-studio/FEWD_2.0.0/tree/FEWD_2.0.1/Week_01_Basics/01_html_basics#external-style-sheets) |GA Press Release| Demonstrate how to create an external style sheet using the press release. Review CSS selectors by styling the press release as you see fit.|
| 50 min | [Lab Time](https://github.com/generalassembly-studio/FEWD_2.0.0/tree/FEWD_2.0.1/Week_01_Basics/01_html_basics#lab-time) | Cookies Recipe | Students add tags to a Cookie recipe, and style as they see fit.|


---

###LESSON PLANNING NOTES

Below you will find notes on each section from the proposed schedule above. These notes are  meant to help you plan for a great class.


####HTML Tags & CSS Selectors Review
__Time : 10min__

 *	This section is a refresher for students. As pre-work we asked students to complete Project 1: ["Anna's Website"](https://dash.generalassemb.ly/projects/annas-website-1) in Dash. Review tag syntax (tags have opening and closing brackets etc.) Review CSS syntax. __NOTES: Students were only introduced to element selectors.__
 
Suggestions for pattern examples: 

*	It starts with an opening tag and ends with a closing tag.
	*	__Exception__: Only tags which don't need to close are those which contain no nested content? That is, img, input, br, hr, etc.

*	Some tags require an attribute (we will cover img tags next class) 

*	Hierarchy of tags. (H1 is going to be bigger than H2)

*	Tags describe the content. 

===
 
 
####Adding Structure
__Time : 60min__

The goal of this section is to explain what it means to add "structure" to a document with HTML, and how to approach content. 

*	Thanks to Dash, students should be familiar with the rules of HTML tags. Adding HTML tags are generally easy for students to grasp. However, students get confused when it comes to knowing which tag to apply to content. To a human reader like yourself, text has meaning, we can read with an understanding of the text and express that in code. 


#####GA Press Release

| Code Along | [GA Solution File](solution/ga_press_release)|
| ------------- |:-------------|
| __Time__ | 30 min| 
| __Topics__ | HTML Tags, Nesting| 
| __Description__| This introductory code along meant to teach students how to read with understanding and apply the correct tag.|   
| __Notes__| Omit ordered list ```<ol>```, students will Google it during lab time.|  


*	See a [suggestion](solution/ga_press_release/instr_notes.md) of how our Curriculum Fellow implemented this code along.

===

####External Style Sheets
__Time: 60min__

This can be used to introduce/review very basic aspects of CSS to students, especially as their first look at "styling a page" with external CSS. I recommend sticking to the following guidelines:

*	Style specific elements to avoid inherited CSS. For instance, change the `font-family` of the `h1` instead of making a change to the `body`, which would be inherited.

*	Avoid the temptation to discuss CSS Reset/Normalize or Boilerplate at this stage. 

*	Keep color simple. We've included some notes about colors and fonts in the slides. If you don't have time to explain in detail, you can ask students to read the notes for homework.
  

#####GA Press Release Styled 

|Code Along | No solution file available|
| ------------- |:-------------|
| __Time__ | 30 min| 
| __Topics__ | External style sheets, CSS selectors| 
| __Description__| This is an exercise to show students external style sheets|   
| __Notes__| There is no styled solution. Feel free to style how you would like. | 
 
===


####Lab Time
Time: 50min

Time for students to apply what they learned. Setup lab time by letting students know how to start the exercise and what is expected of them. 
 
#####Chocolate Chip Cookie Recipe

| Exercise |[Solution File](solution/cookie_recipe) |
| ------------- |:-------------|
| __Topics__ | html tags| 
| __Topics__ | html tags, external style sheet | 
| __Description__| Students add markup to a chocolate chip cookie recipe. This also serves as a time to practice web dev tools (sublime, chrome, finder etc)|    
| __Notes__| The starter code contains .html file with instructions and an image for the bonus questions. Students are required to google and implement the```<ol>``` tag.|

===

[![slides](../../img/icons/slides.png)](slides.md)

click icon for slides.
