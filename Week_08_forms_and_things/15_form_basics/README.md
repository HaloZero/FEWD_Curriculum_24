![GeneralAssemb.ly](../../img/icons/instr_agenda.png)


##Lesson 15 - Basic Forms


###LEARNING OBJECTIVES

*	Be able to differentiate the different types of inputs and why/where we would use each.

*	Understand how to group elements by name.

*	Be able to perform pseudo-styling of input elements that the browser won't let us directly style.

*	Optional - Apply the method, action, and enctype attributes.


###SCHEDULE


| Time        | Topic| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:----------------|
| 30 min | Review | pplication_Form| We've covered a lot of ground. Spend time reviewing all topics. |
| 120 min | [Forms and Inputs]() | pplication_Form| A good place to take a break is right before radio buttons/checkboxes as the students. We need fresh brains so that grouping by name makes sense. |
| 30 min | [Optional Content]() (get and validation) | Form_Validation Form_Search | This is __OPTIONAL__ depending on the pace of your course. |


---

###LESSON PLANNING NOTES

Below you will find notes on each section from the proposed schedule above. These notes are  meant to help you plan for a great class.


####Forms and Inputs
_Time : 120min_


| Exercise | [GA_Application_Page](solutionApplication_Form)|
| ------------- |:-------------|
| __Time__ | 90 min | 
| __Topics__ |Forms, inputs, labels, (optional fieldset/legend),Layout | 
| __Description__|Students will build the GA application page from the provided screenshot |    
| __Notes__ | It is up to the instructor to determine whether to discuss fieldset and legends. You may either have students look these up using Google or discuss them in class. As a learning exercise, you may want to have them use divs and h2 tags and then discuss how there's special tags just for forms that do the same thing. Students will have to look up the opt group tag. Since they've seen forms they should have the knowledge to look this up. If students are having difficulty, go over the searching_for_answers file. Students don't need to do all of the styling for the form. Centering the form and getting the information on the right rows is considered sufficient. |

===


####Optional Content
_Time : 30min_


| Code along | [Form Search](solution/Form_Search) |
| ------------- |:-------------|
| __Time__ |15 min | 
| __Topics__ |Forms and simple search input, GET method and query string parameters | 
| __Description__|Exercise is designed to show students that data actually is sent somewhere when they click a submit button.|    
| __Notes__ | We suggest building the form from scratch (No starter code available). Make sure to point out the query string parameters. You can optionally show a POST request and use the console's network tab to show the post data. Build a simple form with a search input field and a submit button that says "Search!". The form should direct to search-page.html and use the GET method.|



| Code along | [Form Validation](solution/Form_Validation) |
| ------------- |:-------------|
| __Time__ |15 min | 
| __Topics__ |Validation of user forms using a library| 
| __Description__|Instructor will briefly demonstrate email validation using the parsley validation script or a validation script of there own choosing. Instructor can optionally cover browser based form validation. |    
| __Notes__ | The example is already completed, so if you want to briefly show validation you don't need to take time to write the code out in class. Include parsley and jQuery. Add the following attributes to an email input field: ```data-trigger="change", data-required="true" , data-type="email"```
	
===

[![slides](../../img/icons/slides.png)](slides.md)

click icon for slides.
