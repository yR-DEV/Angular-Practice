# Introduction and Setup

### How This Curriculum Works

Here's an overview of the Angular content:

Unit 1:

 * Intro and Setup
 * 2 Way Data Binding
 * Expressions and Filters
 * Intro to Controllers
 * Built-In Directives
 * Angular Events
 * Unit 1 Assessment Reddit Clone

Unit 2:

 * A New Structure
 * Routing
 * Custom Filters
 * Controllers Revisited
 * HTTP Service
 * Custom Services/Factories
 * Structuring Angular Apps for 2.0
 * Custom Directives

Unit 3:

 * Angular + Firebase Intro
 * Firebase Auth
 * Angular + Express
 * Angular + Rails

Before you move on to the next lesson, you should:

* Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
* Answer all questions in ONE MARKDOWN FILE

Be prepared to show your exercises to instructors and engage in discussions about the questions.

Let's get started!

### What is Angular?

According to the official Angular introduction, Angular is a:

> client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

It boils down to this: **Angular helps us build complex, single-page applications very quickly.**

### Setup

We're going to start by setting up a very simple Angular app. Soon we'll learn about patterns for structuring complicated Angular apps, but for now we're just going to use a single `index.html` file with a few scripts.

* Create an `index.html` file.
* Add Angular.  For now were going to use this CDN: `https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js`.
* Add jQuery.  jQuery is (sort of) a dependency of Angular.
* Add the `ng-app` attribute to the `<html>` element in your document.  This declares everything inside of the `<html>` element part of an Angular app. We will see this 'ng' prefix a lot in Angular.
* Test it out!  Add the following line anywhere inside of the `<body>` tag: `{{1 + 6}}`.  Open the page in your browser.  If Angular is setup correctly, you should see `7` displayed.

Questions:

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
###It takes less lines of code, less lines, less characters, easier to read. Also from what I have read about angular versus other frameworks, angular doesnt user setters and getters for data binding. You can treat data almost like objects and object notation in angular.
* People have some very strong opinions about Angular.  What are 3 common complaints people have about Angular?
### angular server pages, performance problems, its use and employment blur the lines between front end and back end development
* Is Angular an MVC framework?
### MVC stands for 'model-view-controller' and describes the three parts of a framework, mostly used for interfaces
* Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!
### Apparently angular comes with/uses a mini version of jquery called jquerylite or something.
* Read the docs for `ng-app`. What is it and what does it do?
### it defines the root element to auto bootstrap onto application. It basically enablesyour page to run
* What does `ng` stand for?
### ng stands for angular, in html, angular uses angular brackets (curlies) and ng sounds like angular

Resources:

* [Angular Docs](https://docs.angularjs.org/api)
* [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
