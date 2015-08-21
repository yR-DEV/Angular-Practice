# 2 Way Data Binding

Let's start by building something simple that showcases the power of Angular.

In traditional frameworks, controllers package up data from the models with a template and then render a view to the user.  That view is a snapshot in time; it only reflects the state of data at the time it was rendered.  Newer JavaScript frameworks like Angular and Ember allow us to write dynamic, live templates.  This means that we can write Angular templates that will **automatically update when our data changes.**  

This is called 2-way or bi-directional binding.

* when a model changes, the view knows about it
* when a view changes, the model also knows about it.


Let's try it out!
 In `index.html` create a text input.

```
	<input type="text" placeholder="What is your name">
```

Add a new attribute `ng-model="name"` to the text input.  This binds the value of the text input to a property called "name". Technically, `ng-model` tries to bind "name" by evaluating the expression on the current `$scope`, and since the property "name" doesn't already exist on this `$scope`, it will be created implicitly and added to the `$scope`. We'll talk a lot more about this when we learn about controllers in a few lessons, so don't worry about it for now.

Now that we've bound the input to the "name" property, let's display the value of "name" on the page.  We can write expressions in our HTML using `{{ }}`.

```
	<h1>My name is: {{name}}</h1>

```

Open up `index.html` in your browser.  What does the `h1` say when the page loads?  Try typing something into the input and notice that the `h1` reflects whatever value we type into the input.  This is our first example of 2-way data binding.

### Exercises

**Raw JS**

Replicate the exact same functionality without using Angular.  In a new file, write vanilla JS code that will automatically update the h1 when the value in the text input changes.

When you are done, compare your solution to [examples/update-without-angular.html](examples/update-without-angular.html).

**Dropdowns**

Use `ng-model` with a dropdown menu (select tag).  Give the user the following four items to pick from: "Dogs", "Cats", "Dogs and Cats", "Neither". Display the user's choice in an `h3`.  For example, if the user selects "Dogs", the `h3` should say "I love dogs <3".

## Questions

* What does ng-model do?
- ng-model binds the input, textarea, whatever, to the angular model and binds it to a property on the scope, you can change css elements, calculate validations, etc
* What is "dirty checking"?
- Dirty checking is how the digestion cycle of the angular model and scope does more of a scan for changes, and the scan or loop stops when it finds something changed, changes it if need be, and continues where it left off. A non-dirty checking cycle woud finish the loop/scan then change dom/vars as needed.
* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
- you do it using ng-init="model-name-here='initial_value'"
* What are those `{{ }}` expressions?  Are they Handlebars?
- no they just indicate data-binding
* Explain what 2-way data binding is.
- The html template gets loaded and the the view gets loaded, 2 way data binding is where any changes in the model, update the view, and changes to the view, update the model. It's a synchronization of the model, and the view. 
* BONUS: Research the `$digest` loop

Resources:

* [Data Binding Reference](https://docs.angularjs.org/guide/databinding)
* [ng-model Docs](https://docs.angularjs.org/api/ng/directive/ngModel)
* [`$watch`](https://www.ng-book.com/p/The-Digest-Loop-and-apply/)
* [ng-cloak StackOverflow discussion](http://stackoverflow.com/questions/12866447/prevent-double-curly-brace-notation-from-displaying-momentarily-before-angular-j)
