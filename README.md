# Library-project
Odin Library Project

Update(8/25/21):

Finally got the toggle read button to work by moving the event listener to after I declare a new Book. After testing this and seeing that it worked, I was easily able to figure out the remove button in a couple of minutes. Now you can toggle the read status of the book and see it change on the page, and then remove the book from the page and library array!

This means really all that's left to do is to do more styling on the page, and to figure out how to implement local storage so thhe page won't completely reset when the browser is refreshed. So close!


Update(8/24/21):

After trying and failing with more solutions, I went ahead and reworked the javascript code in a new file. So far it's a lot easier to keep track of everything, and I think having the toggleRead and removeBook functions in the class Book will help me figure the solution way sooner. I just got the basics working, so you can click add new book, and submit new book.


Update(8/22/21):

Added an overlay feature for the add new book button when clicked, and I'm still working that out so it will look correct. I also think I found the solution for the toggleread buttons, but the problem is the bindevents() function is called once at the beginning, so the loop I made probably is running once and never again (from what I can tell). I think I want to open a new text file, rework some things, and then replace the library.js content. It sounds like a pain, but it will probably make finishing this project a lot easier. I've been learning a lot on every project and during my own studying, so I think I could rework a lot of things.


Update(8/19/21):

Trying to add the test book to the library, but so far no luck. I've been reading through code examples from other projects and I'm having a hard time deciding what the solution should be. It seems like there's several different ways to fix these problems. Still working on making the toggle read button work as well.


Update(8/16/21):

Working on a button for each new book div that can toggle the read status, but it got messy pretty fast. I might need to look at some of the example solutions on Odin if I can't figure it out. I think I might need a constructor for every new button. Right now the toggle read 'test' function only works on the first button because I used getElementById. QuerySelector and QuerySelectorAll didn't seem to help.


Update(8/15/21):

More javascript today. Now the new book information is displayed on the page, but it does not inherit the book div's style. Next up will be fixing that and then adding a server to save user inputted books when the page reloads.


Second update: Fixed the issue earlier, so now when a new book is added it appears in it's own grey box like the test example. I also watched some videos on modular js ( https://www.youtube.com/watch?v=m-NYyst_tiY&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=2 ) and reworked how the code was written. It's a little cleaner and easier to follow now too. 

Now I just need to get the new book divs to display in a nicer grid format or something so they don't just keep going down the page in a single column.


Update(8/14/21):

Worked more on the javascript. Now it takes user input and makes a new book which is pushed into the MyLibrary array, and right now the array is just console logged. 

Next will be displaying this information on the page and creating a new book div every time a new book is submitted. I also would like to add a remove book function. Also futher down the line I'd like to add storage so each person's library will be saved when the page is reloaded or a log in system. Still a lot to do and pretty overwhelming, but progress is being made.


Update(8/13/21):

Using flexbox to style the page. I think I'll be ready to start working more on the javascript later today.


Update(8/12/21):

This probably won't be the only update today, but so far I've just continued laying some foundations and figuring out where everything will go on the page. Added working buttons that hide the add-new book div that will disappear when a new book is submitted. This project has a lot of different elements I need to figure out, so just trying to take it one step at a time.


Update(8/11/21):

Getting everything organized and laying out the foundation.
