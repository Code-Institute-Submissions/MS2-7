# Testing

## Code Validation

All HTML code has passed [HTML Validation](https://validator.w3.org/#validate_by_input) 

![Image of validated code for index page](https://github.com/JimEv87/MS2/blob/master/testing/testing-images/htmlvalidation.PNG)


CSS code passed [CSS Validation](https://jigsaw.w3.org/css-validator/)

![Image of validated CSS](https://github.com/JimEv87/MS2/blob/master/testing/testing-images/cssvalidation.PNG)

I used [jsHint](https://jshint.com/) to check my JavaScript. Although 29 warnings were displayed, these were minor issues relating to esversion: 6

![Image of JS Hint](https://github.com/JimEv87/MS2/blob/master/testing/testing-images/jsvalidation.PNG)

## Browser Testing

I have tested the website on 5 different browsers to see if functionality and appearance is as intended

![Image of browser testing results](https://github.com/JimEv87/MS2/blob/master/testing/testing-images/browsertesting.PNG)

## Responsiveness Testing

The website has been tested for responsiveness on several devices. All pages render as expected and all images display correctly.

![Image of responsive testing results](https://github.com/JimEv87/MS2/blob/master/testing/testing-images/restesting.PNG)

## Bugs

- I initially opted to define the colours using HSL(hue, saturation, lightness) however this failed CSS validaion so I switched to RGB (red, green, blue).
- Some background images were taking too long to load so I used tinyJPG to compress them
- The 'Lives Left' display was not resetting when the game restarted, I fixed this by adding a function to revert all three footballs to white (indicating all 3 lives remain) and triggered the function when the Try Again button was pressed. 

## User Story Testing

- As a user, I want the opening page to look great and inspire me to press Start.
  - The football stadium and football in the heading immediatley grabs the attention of football fans. And the slow scrolling football stadium looks great on mobile and tablet, and the fixed image looks just as good on larger screens. The opening page is clear and uncluttered which encourages the user to press Start.
- As a user, I want the rules of the game to be simple and clearly explained to me so that I can get straight to playing.
  - The rules are explained in three short sentances and displayed clearly in the middle of the home page just above the start button. 
- As a user, I want navigation and use to be simple and intuative.
  - Navigation is simple and intuative.
- As a user, I want the questions to be challenging yet not too hard.
  - The questions are fairly simple to people with an interest in football, however they are harder than they first appear as some teams have recently changed leagues.  The second set of questions are harder still as many of the crests do not include the team's name however most do include a clue to the teams country.
- As a user, I want to be presented with my final score so that I can attempt to beat it or perhaps challenge a friend to beat it.
  - The results screen displays the final score and a comment on how good that score is.  A simple message of "Why not see if you can beat it?" followed by a Try Again button encourages repeat play. Alternatively, clicking the heading to go back to the homescreen will then display the Facebook share button, allowing to post the quiz game directly to Facebook.
