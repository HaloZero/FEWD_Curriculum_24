![Code Demo](../../assets/ICL_icons/instr_code_demo.png)

## Transitions

###Time: 5-10 min

| | |
| ------------- |:-------------|
| __Topics__ | CSS Transitions | 
| __Description__| This COA is a simple example of how you can use transitions to create an image carousel.|    
 


####Task Instructions

Instructor should open the index.html in the Chrome browser. 
They should then use jQuery's add class to add the img-moved-left class to the first image. 
This will cause the image to slide to the left (-500px margin).
If additional examples are needed, instruction can use jQuery's .css to show other transitions. 
Note: In this case, the CSS for margin-left transitions should be changed to "all" or the new style.

####Instructional Design Notes
To be complete with the Education Product Manager

## Animations

###Time: 5-10 min

| | |
| ------------- |:-------------|
| __Topics__ | CSS Animations | 
| __Description__| This COA is a simple example of how you can use animations to make an image spin at varying speeds. |    
 


####Task Instructions

Instructor should open the index.html in the Chrome browser and show the students what's happening with the wheel. 
They should then open the CSS file in Sublime and walk through the animation code. 
They should then go back to the browser and remove the spin-me class to show that the animation does indeed stop (and now that the image is a GIF or something like that).

####Instructional Design Notes
To be complete with the Education Product Manager

## Animation/Transition Event endings

###Time: 5-10 min

| | |
| ------------- |:-------------|
| __Topics__ | Animations/Transition event endings | 
| __Description__| This COA is a simple example of why students should care about animation/transition end events|    
 


####Task Instructions

1) Open the transitions index.html in the Chrome browser.
2) Run the addClass code from Ex 1 a couple of times to show what happens.
3) Refresh the page. Then copy and paste the following code into the browser's console and explain what each line does:
$("#image-container").on("transitionEnd webkitTransitionEnd", ".img-moved-left",function(){
	$("#image-container").append(this);
	$(this).removeClass("img-moved-left");
});
4) Run the addClass code multiple times again and show how we now get an image carousel

####Instructional Design Notes
To be complete with the Education Product Manager

__Note:__	Copy and paste template above if there are multiple Code Demos. 