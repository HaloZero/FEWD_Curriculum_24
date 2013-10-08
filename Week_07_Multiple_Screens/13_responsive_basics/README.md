![GeneralAssemb.ly](../../img/icons/instr_agenda.png)

---

##Lesson 13 - Responsive Basics


###Learning Objectives

*	Articulate that responsive __design__ is more design than code.

*	Know the difference between fixed and responsive layouts and understand the difference between fluid and elastic layouts.

*	Apply media queries to web sites to achieve a responsive layout.

*	Implement media queries to change layout on mobile devices.


###Schedule


| Time | Topic| GA ICLs| Comments |
| ------|:-------------|:-------------------|:----------------|
|30 min| Review| [Boxes]()| This review should focus on layouts and CSS. There is time at the end of this session for general review. |
|60 min| Responsive Layout Design|[Responsive Sites]()<br>[Mobile Boxes]()| |
|10 min| Responsive - REM/EM | | |
|40 min|Responsive - Media Queries| [Adding Media Queries]() | |
|20 min| More Review| | |

###Homework

*	Students work on their final project.
*	Additional exercises available.


---


![Code Demo](../../img/icons/instr_code_along.png)

-----

##Responsive Sites

###Time: 15 min

| | |
| ------------- |:-------------|
| __Topics__ |Layouts, Mobile Layouts | 
| __Description__|Discussion about mobile layouts and high level explanation of what is responsive web design.|    
| __Activity Type__ | Code Along| 

####Instructional Design Notes

*	This is an exercise in asking students to view/analyze a website like a developer. Responsive web design is a buzz word, most students do not know what it means, nor have they viewed a website with layout in mind. 

*	The discussion should help students see how you (a front-end web developer) look at a page with a responsive design lens. (What if I wanted to make this website responsive?)


*	Choose a responsive site that you are fond of. If you are having website block, we've provided some options below. 

*	Ask students to visit the website on their mobile phone first.

*	Facilitate a discussion on what additional information students would like to see on a desktop version.

*	Ask students to go to the same site on their laptop.  

*	Explain to students that this is the same html and css file. Provide a high level explanation of how responsive works.


####Responsive Websites Ideas

*	[Generalassemb.ly]()
*	[Dwolla.com]()
*	[Sweethatclub.com]()
*	[Relayrides.com]()


![Exercise - Instructor](../../img/icons/instr_lab.png)

-----


Remember to share the [starter_code](starter_code/) at the beginning of class. Share code along solutions before lab time so students have an example to reference. 


##[Boxes](starter_code/README.md)

####Time: 20 min

| | |
| ------------- |:-------------|
| __Topics__ |Layouts| 
| __Description__| This exercise is a review on layouts. Students recreate a simple png using html and css. |    
| __Activity Type__ | Exercise | 

####Instructional Design Notes
 
*	This exercise should be time boxed, at this point students should feel comfortable with building this type of exercise in 20 min. 

*	This exercise is used to review layouts. The goal is to refresh  the class on layouts and prep them to think about the next step which is adding css to style the page for mobile. 


##[Mobile Boxes](starter_code/README.md)

####Time: 20 min

| | |
| ------------- |:-------------|
| __Topics__ |Layouts For Mobile| 
| __Description__| This exercise ask students to modify the CSS from their first layout to achieve a different look with the same HTML.|    
| __Activity Type__ | Exercise | 

####Instructional Design Notes
 
*	For the second boxing exercise, have the students open the main css for the first exercise and place a comment at the bottom (something like, /overwriting CSS for new layout goes here/). Below this line, have them add CSS that will make their original page look like the Boxing_2_IMG file.
 
*	The goal is to demonstrate how cascading actually works. Students will learn that by adding the style to the bottom of the page it will override the style above. 

*	Where to put the mobile stuff? We view this as the first step in understanding responsive web design and the use of media queries.


##[Responsive Boxes](solution/solution)

####Time: 20 min

| | |
| ------------- |:-------------|
| __Topics__ |Media Queries| 
| __Description__|This exercise introduces media queries to students.|    
| __Activity Type__ | Exercise | 

####Instructional Design Notes

*	Students will add a media query around their second set of CSS so the style will only apply when the window is less than 768px wide with little guidance from instructors.

*	As we know, programming is largely about being resourceful and finding the answers. At this point you should start to release responsibility to students. Although this is the first time students are working with media queries, they should be able to complete this exercises in approximately 20 min. 


