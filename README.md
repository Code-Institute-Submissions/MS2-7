# CrestTest: A fun football quiz

![Image of the project on various devices](https://github.com/JimEv87/MS2/blob/master/assets/images/misc-images/cresttestresponsive.PNG)

For my Interactive Frontend Development Milestone Project I have decided to create a football quiz named CrestTest that's fun and intuative to play, and hopefully provides an enjoyable user experience that encourages repeat play.

The aim of the game is to identify the football team from the crest displayed, and then select the league that that team plays in from the 4 options displayed.

You can view my project [here](https://jimev87.github.io/MS2/)

## UX
 
I was inspired to create CrestTest from the great number and popularity of other football related quizes available that are enjoyed by the millions of people with an interest in football.  CrestTest's appealing aesthetics, very simple premise and deceptively challenging questions combine to give an enjoyable user experience.  Taking advantage of the competetive nature within all football fans, CrestTest will have the user playing again and again with the aim of reaching the end before losing all of their 3 lives.

I took a Mobile-First approach to developing CrestTest but the game is equally enjoyable when played on all devices and screen sizes. 

### User Stories

- As a user, I want the opening page to look great and inspire me to press Start.
- As a user, I want the instructions to be displayed in a prominant position and clearly explained to me so that I can get straight to playing.
- As a user, I want navigation and use to be simple and intuative.
- As a user, I want the questions to be challenging yet not too hard.
- As a user, I want to be aware of how many lives I have left at all times.
- As a user, I want to know my score as I play and also be presented with my final score at the end.
- As a user, I want to easily be able to share the game with friends.


### Wireframes

I used [Balsamiq](https://balsamiq.com/) to design some wireframes which can be seen [here](https://github.com/JimEv87/MS2/tree/master/wireframes)

## Features

### Existing Features

#### Home Page

- The home page features the CrestTest logo as a heading, a brief guide on how to play, a start button, and a link to share the game on Facebook.
- A visually pleasing background image of a football stadium that continuously scrolls slowly from side to side on mobile and tablet devices.

#### Quiz Page

- Three footballs at the top of the page to indicate lives remaining, they turn red one by one at every wrong answer.
- A large clear image of a football team's crest centre screen, with 4 answer options beneath for the user to guess which league that team plays in.
- Once a selection has been made, the correct answer is shown and a Next button appears for the user to progress to the next question.
- The running score of total correct answers is shown at the bottom of the screen on small and medium screens, in the top left corner of larger screens.

#### Results Page

- The CrestTest logo header reappears which acts as a link back to the homepage.
- The final score is displayed along with a customised message depending on how high the score is.
- A Try Again button is shown for users to try and beat their score.


### Features Left to Implement

- Sound effects
- More questions and levels of difficulty
- A 'share your score' feature on the results page

## Technologies Used

- [Balsamiq](https://balsamiq.com/) to design the wireframes
- [HTML5](https://en.wikipedia.org/wiki/HTML5) to structure and present the content
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) to style the content
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for the logic and interactivity
- [GitHub](https://github.com/) to host the project
- [GitPod](https://gitpod.io/) to develop the project
- [Am I Responsive?](http://ami.responsivedesign.is/#) to test the view of the site on different devices
- [tinyJPG.com](https://tinyjpg.com/) to compress images for better load speed


## Testing

I've tested the quiz thoroughly and have found it to work perfectly on all of the large variety of devices and browsers I have tried.  I have used the Code Institute Slack Peer-Code-Review channel and asked several friends & family to test out the website.  The feedback I have received indicates that the quiz looks good, easy to navigate, is fun to play and encourages repeat play. The full testing log can be seen [here](https://github.com/JimEv87/MS2/blob/master/testing/testing.md)
                                                                                            
## Deployment

This project was deployed to GitHub pages as follows:
1. Login to GitHub and open the repository
2. Click on Settings
3. Scroll down to the GitHub Pages 
4. Below Source, change the drop-down selection from None to Master Branch
5. The automatically refreshes and the site is now deployed

I used only one branch for this project.

### To Make a Clone:

1. Click on 'Code' in the GitHub repository menu and copy the given URL  
2. In your command prompt type 'cd' followed by the director you wish to store your repository in and press enter
3. In your command prompt type 'git clone' followed by the URL copied in step 1 


## Credits

### Content

- The Facebook share button and JavaScript SDK was taken from the offical [Facebook developers documentaion](https://developers.facebook.com/docs/plugins/share-button/) 
- The idea for the JavaScript code to use for the quiz was from a tutorial by [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

### Media

- all crest images provided by [logofootball.net](http://www.logofootball.net/)
- background images provided by [Arsenal.com](https://www.arsenal.com/news/can-you-name-our-94-emirates-stadium-opponents), [unsplash.com](https://unsplash.com/images/stock), [geospatialworld.net](https://www.geospatialworld.net/article/how-gps-and-location-played-a-big-role-in-fifa-world-cup-2018/) and [thesun.com](https://www.the-sun.com/sport/premier-league/74130/jubilant-gareth-bale-celebrates-euro-2020-qualification-by-holding-up-fans-hilarious-wales-golf-madrid-flag/)

### Acknowledgements

I would like to acknowledge and thank:

 - [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/?originalSubdomain=ng) for invaluable mentoring advice

 - The Code Institute tutor suport team for technical coding advice and support

 - [W3 Schools](https://www.w3schools.com/)

 - [StackOverflow](https://stackoverflow.com/)

 - The Code Institute Slack community

 - My partner Sara and my two childern Ffion and Ted for helping with testing on various devices, providing feedback and much appreciated support

