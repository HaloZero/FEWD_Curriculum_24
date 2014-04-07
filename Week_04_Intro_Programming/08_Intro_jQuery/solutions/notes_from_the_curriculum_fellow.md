#####Notes From The Curriculum Fellow:

__Preparation__

Before class, you'll want to choose a couple of example websites that make use of jQuery for interaction. We suggest to focus on two sites: one more complex one to demonstrate some of the possibilities of using JS to alter a page after it loads, and another simpler page that has the jQuery library loaded, but which doesn't have much complex functionality of its own.

At the time of this writing, I typically use the USA Today website as a demonstration and the Food Sense website as a playground.

__Demonstrating jQuery in Action__

USA Today has a number of interesting things going on, but I focus on their drop-down menus with my class. When showing this or another site with functionality to show off, I try to focus the conversation around two 

key points:
Something about the page is changing when I, the user, take an action. I point out that this isn't like clicking a link, the whole page isn't reloading.

There is some kind of logic going on. For this, I try to use statements like "When I do this, it does that." As an example: "When I hover over this menu item, this large drawer with links slides into view; when I move my mouse away, the drawer slides shut."

The goal here is to get students in a mode of analyzing what they see happening on a page and breaking it down into its constituent logical parts. I try to stick to plain English as much as possible when describing the logical process behind how something appears to be working. At this point, we want to show students how we observe something and draw logic out of it. Stick to what they can clearly see happening, and try to avoid technical explanation for now.

jQuery Baby Steps

For beginners, it is easiest to step into jQuery early due to the easier syntax. We want to show students the benefits of using jQuery, but want to highlight that jQuery is JavaScript. Students will continue to practice syntax in the following sections. This section should focus on the syntactical rules.

##FAQ Exercise Notes

Start with just a prompt and solicit ideas from the class. This can actually be fairly open-ended:

>“Let’s say I’m making a site for my organization, and I want to add a page for frequently asked questions. What does that page look like?”

As students make suggestions, sketch their ideas on the board, with their name labeling their contribution. This way you can refer to, for instance, “Kim’s suggestion”.

If necessary, add to the problem a bit: “This seems like a good idea, but what if I have a lot of questions?”

As you go, ask the students what they like about each solution, and for any pitfalls inherent in the idea.

After you’ve collected a handful of ideas (say 5–8, maybe some with variants), step back and talk about selecting an idea to work on that strikes a balance between being easy to build and useful. The process of taking down ideas can easily take 30–45 minutes. Let it, as long as the students seem engaged.

Choose to build a simple accordion-style FAQs page, because it is simple enough to build a quick working version.

As you build your accordian styled FAQ page keep the following in mind:

*	Build the markup with the students.

Yes, it can be tedious, but I strongly encourage you to reinforce the HTML that students have been learning by having them help come up with the markup for the page. They may not come up with the same markup that you might have, but that’s okay!

*	Stick to direct and explicit action as much as possible.

At this stage, things will be clearer to students if you use ID selectors to manipulate only one thing at a time. Refactoring and using the `this` keyword will come later. Also, when binding a function, use the shorter form `.click()` instead of the more verbose `.on()`, and refer to a named function instead of using an anonymous function, to keep the syntax cleaner and easier to follow.

*	Start with an isolated problem and build from there.

Starting with a simpler problem and then growing is a very valuable process to show students and to reinforce when they are working on their own. In this case, once I got this `showAnswer1` function working, I would probably ask “Well, do we expect anything to happen when a user clicks on the question again?” And then I’d proceed from there to change the function to something with a better name, perhaps `toggleAnswer1`, and so on to making the other questions “clickable” as well: Here are examples of my incremental build:

[Step 1: FAQ](http://codepen.io/nevan/pen/xkhmA)

[Step 2: FAQ](http://codepen.io/nevan/pen/hnDgo)

[Step 3: FAQ](http://codepen.io/nevan/pen/xuGtE)

[Step 4: FAQ](http://codepen.io/nevan/pen/mrIGu)

[Step 5: FAQ](http://codepen.io/nevan/pen/mKzvs)

By the end of all this, students will likely be wondering of their own accord if there isn’t a better way than having to copy and paste so much code. That’s when you get to tease and say “Yeah, I wonder…” and then bring it back later in the course.