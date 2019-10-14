# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

  forEach() - executes a provided function once for each array element. It loops through the array while performing via a function or set of instructions for each element or array element. 

  map() - creates a new array with the results of calling a provided function on every element in the calling array. We need an empty array to push the new information. 


2. What is the difference between a function and a method?

  A function is piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed. It’s independent of an object. Functions can be on any other scope of the code and not all functions are methods. Things several entities can do, it doesn’t belong to any class in particular. Function => Free (not belonging to an object or class). Defined outside of classes. 

  A method is a piece of code that is called by a name that is associated with an object. It’s a function that belongs to a class. It’s a mini function and an object. It’s the object-oriented word for ‘function’. All methods are functions. Things only one entity can do (dog = bark). Method => Member (A member of an object or class). 

3. What is closure?

  Closure controls what is and isn’t in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope. Closures are frequently used in JS for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns. It’s a combination of a function bundled together (enclosed) with reference to its surrounding state (the lexical environment). A closure gives you access to an outer function’s scope from an inner function. In JS, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned. 

4. Describe the four rules of the 'this' keyword.

  This: What is the calling object? 
  
  a. Default/window binding: Is the function called in the global scope? Window binding is like the forest of trees, not sure which one we are pointing at, so we point at the forest. 
  
  b. Implicit binding: Automatic with objects in methods. When a function is called by a preceding dot, the object before the dot is ‘this’. Implicit binding occurs when dot notation is used to invoke a function. 
  
  c. New binding: Is the function called by new? When a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. Whatever is to the left of the dot becomes the context for ‘this’ in the function. 
  
  d. Explicit binding: Is the function called as a method, ie: obj.fun()? When JS’ call, apply or bind method is used, this is explicitly defined. You can force a function call to use a particular object for this binding, without putting a property function reference ont he object, so we explicitly say to a function what object it should use for this - mentioned abov

5. Why do we need super() in an extended class?

  We use extends keyword to set a class as a subclass. Extends tells super where to go. 
  Super keyword is used to access and call functions on an object’s parent. To make sure that the parent class is called via the second class’ constructor so as to inherit the characteristics and behaviors of the parent class. The super keyword is used in 2 ways:

  a. The super keyword used as a function which calls the parent class with parameters passed to the second object to make the second object an instance of the first object. 

  b. The super keyword used as object which refers to the parent class. The super keyword is used to call the methods of the parent class explicitly. 

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
