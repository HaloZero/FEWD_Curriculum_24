![GeneralAssemb.ly](../img/icons/instr_agenda.png)


##Lesson Extra - GitHub


###Learning Objectives


This lesson was created to intro students to working like a developer.

*	Set course expectations
*	Utilize the shell commands to create and change directories.
*	Define Git and articulate the benefits of using it.
*	Configure Git on a computer and push/pull from class repository


###Schedule


| Time        | Topic| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:-------------------|
| 60 min | Intros | | This time is allocated to intros and communication about course expectations. |
| 45 min | Command Line| code demo - [command line basics](instr_code_demo_notes.md)<br> ex - [command_line_basics_exercise](instr_exercise_notes.md)||
| 60 min | Using GitHub | code demo - [git basics](instr_code_demo_notes.md)<br>code demo - [git in class](instr_code_demo_notes.md) <br> ex [git_it_together](instr_exercise_notes.md)|This is specific to using GitHub for this course.|


###Homework

Review command line and GitHub.
Write a blog entry about what you learned the first class.

---

![Code Demo](../img/icons/instr_code_along.png)

## Git Basics

###Time: 30 min

| | |
| ------------- |:-------------|
| __Topics__ | bash commands, terminal, git, gitHub| 
| __Description__| This will be students first exposure to GitHub. We will continue to use GitHub in class so understanding the basics is key.|    
 


####Task Instructions

This code along is broken into 3 parts. Mix theory and demonstration as you see fit. 

**_Adding git to a folder_**

*	Create a folder called Final_Project. 
*	Change into it
*	Create 2 files using the touch command: proposal.md, model_diagram.md
*	Tell git to watch this folder
*	Tell git to track the 2 files

**Committing**

*	Open proposal.md in sublime text
*	Type ‘For my final project, I want to…’
*	Check the status of the file
*	Look at the difference in the file
*	Tell git it’s ok to commit this file
*	Commit the file

**_Pushing Changes To GitHub_**

*	Log into Github
*	Create a new repository without a readme named BEWD_Final_Project
*	Go back to your folder and add the remote branch
*	PUSH your code to GitHubCode Demo Notes

## Command Line Basics Code Along

###Time: 20 min

| | |
| ------------- |:-------------|
| __Topics__ | bash commands, terminal| 
| __Description__| Demonstrate how to navigate computer files and folders  using the terminal.|    
 
 This code along will introduce students to the terminal. As a class, complete the task below.


####Task Instructions 
1. Create a directory named FEWD_Class. 
2. Change into this directory.
3. Create a file named "index.html" using the touch command.
4. Demonstrate how to open "index.html" in Sublime Text from the terminal.
5. Have students set up Sublime for working environment. (Show open files side bar)
6. Using HTML comments type "This is how you should take notes in class." Briefly explain comments (more on comments next lesson)
7. Remove directory


**Instructional Notes:**

-	Make sure to explain each command while students follow along.
-	Switch back to finder often so students can make a connection to what they are familiar with.


## Git In Class


###Time: 15 min

| | |
| ------------- |:-------------|
| __Topics__ | bash commands, terminal, git, gitHub| 
| __Description__| Setup repositories for in class labs and homework|    
 


####Task Instructions

*	Have students fork the course repository (BEWD_CITY_NUM).
*	Clone personal copy of class repository.
*	Add an upstream remote that points to instructor's repo.
*	Pull from upstream

**Instructional Notes:**

*	Encourage students to take notes in case they would like to do this on their own. 
*	Start every subsequent class is with a git pull upstream. You will see that after 2 weeks, students will do this on their own.

---


![Exercise - Instructor](../img/icons/instr_lab.png)

Remember to share the [starter_code](starter_code/) at the beginning of class. Share code_along solutions before lab time so students have an example to reference. 


###[Bash Basics Exercise](starter_code/ex_command_line_basics_exercise.md)

####Time: 20 min

| | |
| ------------- |:-------------|
| __Topics__ | bash commands, terminal| 
| __Description__| Practice navigating computer files and folders using the terminal.|    
 

####Instructional Design Notes 

*	Students were given pre work, where they were asked to read and try a few commands. For those that did the pre-work,  this will be a simple exercise.

*	To students that struggled with this exercise, should spend some more time practicing with the command line for homework. Make sure to make that clear. Students who fail to grasp using the command line often fall behind quickly. The resources and pre-work docs offer more practice.


###[Git It Together](starter_code/ex_git_it_together.md)

####Time: 15 min

| | |
| ------------- |:-------------|
| __Topics__ | bash commands, terminal, git, GitHub| 
| __Description__| Practice using Git and creating pull request.|    
 

####Instructional Design Notes

*	Students will need to google pull request. This is a good opportunity to teach students that programming involves being able to search for the answer. 

