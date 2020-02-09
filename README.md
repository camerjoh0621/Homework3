# Homework3
Random Password Generator

In this activity I created a random password generator. 

## Code Breakdown

* The first step I took was to create a set of prompts that would display in succession when the generate password button was clicked.

* Next I chose to create a set of 4 functions. Each one was responsible for generating a random character.  The four categories of random characters were uppercase letters, lowercase letters, numbers, and symbols.  The charCode property I placed inside the function is responsible for returning the number associated with each character.  Their is a table that contains all these characters and it assigns a numerical value to each.  For instance the number "97" represents the letter "a".

*After creating these four functions I needed to create another function that utilized the random characters they generated.  Inside the function was an initial for loop that took the character length of the password specified by the user in the prompt and put it through multiple if statments.  These statments were designed to continue to loop through until the specified amount of characters was reached.

*I worked with Forest for a few hours after the class and we seemed to get everything working.  We kept using 10 characters in length to create the password just to keep it simple.  When I arrived home though I realized the only chracter length value that is accepted is 10.  Honestly he did the best he could to teach me but he more or less had to walk me through each step and at the end I felt just as confused as I did when I started.  I really don't have any clue how the javascript functions so I wasn't able to do anything to fix it.  