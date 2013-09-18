###Reviewers Notes

__Jessica__ Do we have a code along to demonstrate a couple form tags?

---


![GeneralAssemb.ly](../../assets/ICL_icons/instr_agenda.png)


##Lesson 13 - Basic Forms


###Learning Objectives

*	Understand what the form tag is used for and what the method, action, and enctype attributes are used for
*	Be able to differentiate the different types of inputs and why/where we would use each
*	Understand how to group elements by name
*	Be able to perform pseudo-styling of input elements that the browser won't let us directly style	


###Schedule


| Time        | Topic| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:----------------|
| 60 min | Forms and Inputs | Forms and Inputs slides | A good place to take a break is right before radio buttons/checkboxes as the students. We need fresh brains so that grouping by name makes sense. |
| 90 min | Building an application form| Application_Form | Students will have to look up text areas and optgroups, this is intentional |
| 15 min | GET requests using forms | COA_Form_Search | This is __OPTIONAL__ depending on the pace of your course. |
| 15 min | Validating forms | COA_Form_Validation | This is __OPTIONAL__ depending on the pace of your course. |


###Homework

*	Students continue work on their final project.

---

![Code Demo](../../assets/ICL_icons/instr_code_demo.png)

##[Form Search](solution/COA_Form_Search)

###Time: 15 min


| | |
| ------------- |:-------------|
| __Topics__ |Forms and simple search input, GET method and query string parameters | 
| __Description__|Exercise is designed to show students that data actually is sent somewhere when they click a submit button.|    
| __Activity Type__ | Code Along|

####Instructional Design Notes

*	We suggest building the form from scratch. You should show the form being built from scratch
*	Make sure to point out the query string parameters. 
*	You can optionally show a POST request and use the console's network tab to show the post data

####Task Instructions
*	Build a simple form with a search input field and a submit button that says "Search!". The form should direct to search-page.html and use the GET method.



##[Form Validation](solution/COA_Form_Validation)

###Time: 15 min

| | |
| ------------- |:-------------|
| __Topics__ |Validation of user forms using a library| 
| __Description__|Instructor will briefly demonstrate email validation using the parsley validation script or a validation script of there own choosing. Instructor can optionally cover browser based form validation. |    
| __Activity Type__ | Code Along|


####Instructional Design Notes

*	The example in COA_Form_Validation is already completed so if you just want to briefly show validation you don't need to take time to write the code out in class. 

####Task Instructions

*	Include parsley and jQuery.
*	Add the following attributes to an email input field:
	*	data-trigger="change"
	*	data-required="true" 
	*	data-type="email"
	
---

![Exercise - Instructor](../../assets/ICL_icons/instr_lab.png)

Remember to share the [starter_code](starter_code/) at the beginning of class. Share code_along solutions before lab time so students have an example to reference. 

##[GA_Application_Page](solution/Ex_Application_Form)

###Time: 90 min

| | |
| ------------- |:-------------|
| __Topics__ |Forms, inputs, labels, (optional fieldset/legend),Layout | 
| __Description__|Students will build the GA application page from the provided screenshot |    
| __Activity Type__ | Exercise |


####Instructional Design Notes

*	It is up to the instructor to determine whether to discuss fieldsets and legends. You may either have students look these up using Google or discuss them in class. 
*	As a learning exercise, you may want to have them use divs and h2 tags and then discuss how there's special tags just for forms that do the same thing.
*	Students will have to look up the optgroup tag. Since they've seen forms they should have the knowledge to look this up. If students are having difficulty, go over the searching_for_answers file. 
*	Students don't need to do all of the styling for the form. Centering the form and getting the information on the right rows is considered sufficient.
