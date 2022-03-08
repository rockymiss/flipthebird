<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646648943/Flip%20the%20Bird/bird-logo_dhleyk.png"></p>


# Flip the Bird Game

For my **Portfolio 2 Project** on the **Code Institute's Diploma in Software Development (E-commerce Applications)** course I have created a card flip game called Flip the Bird.  The game is a simple memory match game where the user matches cards before their lives run out.  The user can choose between flipping images of birds, flipping images of feathers or flipping images of cartoon birds. 

Link to the deployed website is [here](https://rockymiss.github.io/flipthebird/). 

Link to the repository is [here](https://github.com/rockymiss/flipthebird). 

The Design has been focused to **Desktop** first and **Responsive**

![alt text](https://res.cloudinary.com/rockymiss/image/upload/v1646745681/Flip%20the%20Bird/flip-mockup_thutsp.png)

-----

## Who is this game for and what does it do?
Flip the Bird is a game for children or adults alike to pass the time matching different images.  Memory games, while simple in nature, are very effective in improving cognitive function, memory and focus.  

-----

## User Experience


### From a User's Perspective
As a user it is important: 

1. That it is easy to navigate the game. 
2. To understand the rules of the game. 
3. To understand how to start the game. 
4. To choose a game they want to play. 
5. To turn cards to play the game. 
6. To clearly see images to match.
7. To see how many lives they have and how many remain as they play. 
8. To see how long it takes them to play.
9. To see if they have won or lost the game. 
10. To play again or to choose a different game. 
11. To return to the home page. 



### Users Fulfilment

1. The game is laid out simply so when first loaded the user knows what the game is.   Buttons are used throughout the game for easy access to different sections. 
2. When the game is first loaded the user immedidately sees information on how to play the game. 
3. The information on how to play shows the user how to start the game by entering their name. 
4. The user will see three simple buttons to choose from, birds, feathers or cartoons. 
5. 16 cards are laid out and can be turned easily by clicking or pressing on each card. 
6. Using 16 cards, there are 8 matching pairs.  The user can see clear images as each card is turned. 
7. Above the game cards the user can see how many lives they have to begin with and as they make choices their lives will decrease by one each time so the user can see how many lives are left.
8. Above the game cards the user can see a timer which will count upwards showing them how long it takes to match all of the cards. 
9. If the user loses the game a container will pop up telling them they have lost.  If a user wins the game a container will pop up telling them they have won and how long it took them to win. 
10. Both containers to say the user has won or lost contains a button letting them play again by choosing a game.
11. The user can click the logo at the top of the page to return to the welcome container at any time.   

-----
## UX 


### Strategy 

The game is created for people of all ages to play.  The game can be used to pass the time or to develop and improve cognitive function, memory and focus.

The main aim is to be able to know how to play the game, choose from different games and play those games.  

### Scope  

Features are set up to be simple, welcoming and easy to use.  The main existing features are: 

- Logo
  - The logo is always visible at the top of the page and if clicked the user can return to the welcome container at any time. 
   
- Welcome Container
  - The welcome container is visible when first loaded.  This container tells the user what the game is about and how to play the game.  The container has an input for the user's name and a button to start the game. 

- Game Choice Container
  - Once the user submits their name this container will only be visible along with the logo.  This container has three buttons to choose from three different games, birds, feathers or cartoons. 

- Details Container
  - The details container appears below the logo and above the playing cards on all games.  It shows a timer so the user can see how long it takes them to play the game and it shows how many lives/flips the user has left to complete the game. 

- Game Container 
  - The game container contains 16 cards in a grid.  There are 8 matching pairs in total.  The cards can be flipped over to see the images as the user clicks them.  Cards that match will stay visible, cards that don't will flip back over. 

- Losing Container 
  - If the user runs out of lives the Game container will disappear and the losing container will show telling the user they have lost.  This container will have a button allowing the user to play again by choosing a game. 

- Winning Container
  - If the user matches all cards correctly the Game container will disappear and the winning container will show telling the user they have won and how long it took them to match all of the cards.  This container will have a button allowing the user to play again by choosing a game. 

- Buttons
  - There are various buttons used throughout the game:
    - Welcome Container: 
      - Begin Button once clicked allows the user to start and see options for different games. 
    - Game Choice Container: 
      - Birds Button once clicked allows the user to play the bird images game.
      - Feathers Button once clicked allows the user to play the feather images game.
      - Cartoon Button once clicked allows the user to play the cartoon images game.
    - Losing Container and winning Containers:
      - Play Again Button once clicked allows the user to play again by choosing a game. 

### Structure Plane

There is one index page with a logo and six different containers. 

  - Logo
      - The logo is at the top of the page always.  The logo is simple text with the words FLIP THE BIRD and two bird images either side.  The main logo was chosen as it clearly states the name and the images compliment the name of the game.  
  - Welcome Container
      - The Welcome container is the first thing that people will see.  It welcomes the user and gives clear instructions how to play the game. It's important that the user knows what the game is about when they land on the page and it's important also that they know how to start the game.  The user can enter their name in the welcome container.   There is a button on the welcome container with the word "begin" which is clear to the user that this will begin the process of starting the game. 
  - Game Select Container
      - The game select container gives the user three different options for games.  The user will see three different buttons.  The first button when clicked will allow the user to play a game matching bird images.  The second is a feather game, which allows the user to play a game matching different colour feathers and the third is a matching game with cartoon images of birds. 
  - Game Container
      - The game container consits of 16 cards face down.  The user can turn over the cards one at a time by clicking on the cards.  If the images on the cards match, the cards will stay up.  If the images do not match the cards will turn back over.  The user has eight lives.  Each unmatch of cards will result in the user losing a life.
  - Details Container 
      - The details container appears above the game container when the user starts a game.  Inside this container is a timer and how many lives/flips left the user has.  If the user fails to make a match of cards then they will lose a life which can be seen decreasing in the details container.  The timer counts up to show the user how long it is taking them to match the cards. 
  - Hard Luck Container 
      - The hard-luck container appears if the user loses all of their lives/flips left before matching all of the cards.  The user gets a message to say "Sorry you have lost".  Inside this container there is a button with the words "Play Again".  When this button is clicked the user is re-directed to the game select container. 
  - Congratulations Container 
      - The congratulations container appears if the user matches all of the cards before running out of lives.  When the game is won a message pops up saying "Congratulations you won the game with a time of ...".  The time it took the player to match all of the cards appears at the end of this message.  The congratulations container also contains a button wtih the words "Play Again" which will re-direct the player back to the game select container. 

### Skeleton 

The design was focused to desktop first but can be used on small devices.  Wireframes are done using balsamiq:  

##### Welcome Container

![alt text](https://res.cloudinary.com/rockymiss/image/upload/v1646670386/Flip%20the%20Bird/flip-bird-welcome_sonu4d.png)

##### Game Choice Container

![alt text](https://res.cloudinary.com/rockymiss/image/upload/v1646670386/Flip%20the%20Bird/game-choice_bszde0.png)

##### Game Container

![alt text](https://res.cloudinary.com/rockymiss/image/upload/v1646670386/Flip%20the%20Bird/game-birdflip_n0ryb6.png)


### Surface  

##### Colors 

The following palette of colors were chosen as they were eye-catching, vibrant for the game and worked well together: 

<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646658143/Flip%20the%20Bird/color-palette_elvk4j.png"></p><!--palette of colours image-->

1. #F48C06 and #9d0208 - for gradient background
2. #FFBA08 - for text colour 
3. #03071E - for text colour on details container and buttons
4. #370617 - for background colour on containers and back of playing cards
5. #370617 - for input text colour on name input
6. #E85D04 - for background colour on buttons
7. #9D0208 - for hover colour on buttons

 
##### Typography

Throughout the site I  used Orbitron, sans-serif from google fonts as it was clear and easy to read.  

For the logo I used Paalalabas Wide which was created externally using [Canva](https//www.canva.com).  This font was used as it was visually appealling and very readable. 


-----
## Future Implementation 

- I would love to add a game using sounds for this project.  It is definitely something I will re-visit as I think a game with different bird sounds could really add to this game while making it more accessible for all users.

- I would also like to add a leader board showing the fastest times to complete each game. 

- Links to social media.  While could have been easily added I didn't feel they were necessary for this project as they served no purpose to the game.  However as the game expands or other games are introduced a social media platform would be useful. 

-----
## Technologies Used 


- HTML5 to provide content and structure to the website.
- CSS3 provides styles for the website. 
- Javascript ES6 to provide interactivity to the site. 
- [Coolors.co](https://coolors.co/) to select colors for the website that would work well together.  
- [Cloudinary.com](https://www.cloudinary.com/) to store images for the website.
- [Google Fonts](https://fonts.google.com/) for font.
- Balsamiq to create wireframes.
- [Canva.com](https://www.canva.com/) for bird image on cards. 
- [TinyPNG](https://tinypng.com/) - to compress images.
- Gitpod to create and edit the website. 
- GibHub for hosting files and deployment of the website.
- Google Chrome DevTools for debug and testing site.
- GitBash to push changes to the GitHub repository.

<details open>
<summary>Tinypng image</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646686482/Flip%20the%20Bird/tinypng_d97fss.png"></p><!--compressed photos-->

</details>

-----
## Resources 

- Code Institute course materials, tutor and mentor support.
- Code Institute Slack Community.
- Love Maths walk-through on Code Insitute.
- [W3schools](https://www.w3schools.com/) 
- I used [Stackoverflow](https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript) but in particular for the timer. 
- [Developed By Ed Flip Game](https://www.youtube.com/watch?v=-tlb4tv4mC4) for structure and walkthrough of the game.  I used this code for the appending of the card images, shuffle and matching of cards.  I changed the code to suit this game as it was three games in one.  I struggled initially with Javascript and this walkthrough video really helped me get a better understanding of it.  Particularily manipulating the DOM.  I also liked the way he created functions for the data.  I mostly kept his transform styles of the cards flipping.  I tried it a few other ways but I really liked this style and it worked well with my theme.   
- [cssportal](https://www.cssportal.com/css-cubic-bezier-generator/) to understand use of cubic Bezier transition when flipping the card. 
- [Udemy- The Complete 2022 Web Development Bootcamp](https://www.udemy.com)
- [Developed by Ed](https://developedbyed.com/) to get a better understanding of Javascript
   

### Images

#### Birds
- Photo by Michelle Reeves from Pexels - puffins
- Photo by mark broadhurst from Pexels - colourful bird
- Photo by chris clark from Pexels - crested lark
- Photo by Jos van Ouwerkerk from Pexels - blue head
- Photo by Cristina Andrea Alvarez Cruz from Pexels - hummingbird
- Photo by nkk from Pexels - in your face parrot
- Photo by Jad El Mourad from Pexels - red bird
- Photo by Jean van der Meulen from Pexels - Peacock


#### Feathers
Feather images created using [Canva.com](https://www.canva.com/).

#### Cartoons

Cartoon images created using [Canva.com](https://www.canva.com/).

-----
## Testing


### Local Testing

Manual testing of all buttons, links, functionality and grammer on the website has been carried out.  The following was verified by manual testing: 

- Logo 
  - That the logo/name of the game can be clearly seen on the top of the page and is responsive on all screens down to 280px.   
  - That the logo when clicked will return the user to the welcome page. 
- Welcome page
  - That the Welcome message is clear and responsive on all screens down to 280px wide.
  - That the How to Play message is clear and responsive on all screens down to 280px wide.
  - That the user can enter their name into the input field and click submit. 
  - That when the user clicks submit they are directed to the game choice container and the welcome container is not visible anymore.
- Game Choice Container
  - That the logo is clearly seen when the game choice container is opened. 
  - That the user can see a message with the name they inputted into the welcome page and asking them to choose an option. 
  - That the user can see three buttons. 
  - That the user, when clicking the birds button, is re-directed to the Game Container with bird images and the Game Choice Container is not visible anymore.  
  - That the user, when clicking the feathers button, is re-directed to the Game Container with feather images and the Game Choice Container is not visible anymore.
  - That the user, when clicking the cartoons button, is re-directed to the Game Container with cartoon images and the Game Choice Container is not visible anymore.
- Game Container
  - That after the user clicks the bird button on the game choice container the game container opens along with the details container and the game choice container disappears.   When the user clicks the images that they are bird images. 
  - That after the user clicks the feather button on the game choice container the game container opens along with the details container and the game choice container disappears.   When the user clicks the images that they are feather images. 
  - That after the user clicks the cartoon button on the game choice container the game container opens along with the details container and the game choice container disappears.   When the user clicks the images that they are cartoon images.
    - Playing the games 
      - When the user clicks a card it flips over. 
      - When the user clicks a second card it flips over and the first card remains. 
      - If the cards match that the two cards remain facing up and the user can choose another card. 
      - That the user cannot click on matched cards that remain facing up to flip them back over. 
      - If the cards do not match that the two unmatched cards flip back over and the user can try again.
      - That the player loses the game when they have 8 failed attempts to match pairs. 
      - That the player wins the game if they match all of the cards.   
- Details Container
  - That when the user chooses any of the three games the details container opens and appears above the games container. 
  - That the timer is displayed clearly. 
  - That the number of flips the user has to start the game is 8
  - That the number of flips left is displayed clearly. 
  - That the timer counts upwards showing the user how long it takes to play the game. 
  - That the lives decrease as the player fails to match a pair of cards. 
  - That when the game is re-started or a different game is chosen the time resets back to zero.
  - That when the game is re-started or a different game is chosen the flips left resets back to 8. 
  - That the details container is responsive on all screens down to 280px wide. 
- Hard Luck Container 
  - That the hard luck container appears when the player loses and the game container along with the details container disappears. 
  - That the player sees a message saying "Sorry you have lost". 
  - That the player sees a button asking them to play again. 
  - That the game choice container appears when the play again button is clicked and the hard luck container disappears. 
- Congratulations Container 
  - That the congratulations container appears when the player wins and the game container along with the details container disappears. 
  - That the player sees a message saying "Congratulations you won the game with a time of ...". 
  - That the player sees the correct time it took them to win the game at the end of this message. 
  - That the player sees a button asking them to play again. 
  - That the game choice container appears when the play again button is clicked and the congratulations container disappers.  
- Footer on all pages: 
  - That the footer remains visible no matter what container is visible. 

### User Testing

The website was sent to a group of approximately 15 people of all different ages.  My children 6 and 8 also tested the game and could manage functionality well and really enjoyed it.  Other users found the game easy to work through but found it hard to win in under 8 flips.  I didn't change the flip lives because of this as all users kept going back to the game to try to win!  Some in competition with others.  I liked this as they kept coming back to it.  Devices used to test were as follows: 

- Huawei P30
- IPhone 7s
- Iphone 10
- IPhone 11
- Iphone 12 
- Samsung A32
- Samsung A21.
- Samung Galaxy S10+
- Samsung S8  

This testing proved very helpful with responsivness errors and other errors that did not show up using chrome dev tools.  

### Browser Testing

The Website has been tested on Google Chrome, Microsoft Edge, Safari and Opera.   On all browsers testing was as expected.  Functionality and responsiveness are good. 


### Validators 

The website was tested using Jigsaw W3C validation. 

<details open>
<summary>HTML Validator Clear</summary>
<br>
<p align="center"><img src=https://res.cloudinary.com/rockymiss/image/upload/v1646684030/Flip%20the%20Bird/html-validator_ipgxao.png></p><!--validator clear photos-->

</details>
<br>

<details open>
<summary>CSS Validator Error</summary>
<br>
<p align="center"><img src=https://res.cloudinary.com/rockymiss/image/upload/v1646684589/Flip%20the%20Bird/css-validator-error_c3nwes.png></p><!--validator clear photos-->

</details>
<br>

<details open>
<summary>CSS Validator Clear</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646684589/Flip%20the%20Bird/css-validator-complete_gackut.png"></p>

</details>
<br>

<details open>
<summary>JSHint Test Error</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646754313/Flip%20the%20Bird/jshint-errors-flip_sebde1.png"></p>
</details>
<br>

<details open>
<summary>JSHint Test</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646751399/Flip%20the%20Bird/jshint-flipbird_pqstwx.png"></p>

</details>
<br>

### Responsiveness 

To check responsiveness I used Google Chrome Dev Tools.  Desktop, Mobile and tablet sizes were tested.  The website responded well.   
<br>

###  Result: Chrome Lighthouse 


<details open>
<summary>Lighthouse desktop report preview</summary>
<br>

<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646752191/Flip%20the%20Bird/desktop-lighthouse-flip_luz8sp.png"></p>

</details>
<br>

<details open>
<summary>Lighthouse mobile report preview</summary>
<br>

<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646752191/Flip%20the%20Bird/mobile-lighthouse-flip_k0sf9z.png"></p>

</details>
<br>


### Color Contrast Testing 

I used [a11y](https://https://color.a11y.com/) to test the color contrast on the website which produced no issues. 
<details open>
<summary>Color Contrast Results Preview</summary> 
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646752998/Flip%20the%20Bird/color-contrast-flip_xoqcog.png"></p>

</details>
<br>

### Accessibility 

I used the chrome extension wave to test accessibility and received no errors. 
<details open>
<summary>Wave results</summary> 
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646773855/Flip%20the%20Bird/wave-test_yoqt1z.png"></p>

</details>
<br>


### Issues/Bugs Fixed 

When playing the games intitally the divs and images from the card file were being duplicated.  The cardGenerator function was duplicating the cards each time the games were restarted, as seen in the image below.  To resolve this issue I needed to create a function that would delete the element when the game finished.  I found the solution on [w3schools](https://www.w3schools.com/jsref/met_node_removechild.asp)

<details open>
<summary>Issue images</summary>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1646753345/Flip%20the%20Bird/duplication-node_pfhwhj.png"></p>
</details>
<br>

Issues arose with iphone devices where the cards would not flip and the images wouldn't show.  See video below.  The error was solved by applying webkit styles to the transition and transform styles for the flip animation in CSS.  

<details open>
<summary>Safari/Iphone Error</summary>
<p align="center">https://user-images.githubusercontent.com/95221562/157125074-c0d08397-b881-4798-b863-806614bf58ba.mp4</p>
</details>
<br>


### Issues Unresolved

The game could still be played by Safari/iphone users after the above issue was resolved however there were still some minor glitches where every now and again an unflipped card would flash on and off.  I suspect it has something to do with the perspective in the styles on the animation however I was unable to resolve it before the deadline.  While the game still functions well it would give iphone users an advantage as they may see unflipped cards.  


-----
## Version Control


### Git and GitHub 

Local repository and IDE used: GitPod
Remote repository used: GitHub

Steps followed: 
- I created a new public repository on GitHub using the Code Institute template.
- I then created a workspace and started coding on GitPod. 
- Pages were created along with assets folders and css style file. 
- As I worked I previewed changes using ports to open the browser.
- To save my work safely I continued to use the terminal consistently by using: 
    - **git add .** to add work to git
    - **git commit -m""** to commit the work 
    - **git push** to update work to GitHub 


### Deployment 


  #### Deployment: 
        
    To deploy the site to Github pages the following steps should be followed: 

    - From your list of repositories select the repository you want to deploy.
    - Click on settings. 
    - Scroll down to GitHub pages and open Github pages. 
    - Select main branch and click save.
    - The page should automatically refresh and the deployed link is provided.

<details open>
<summary>Deployment Preview Image</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1642789616/kitchen-nippers/deployed-site_fgqlhc.png"></p>

</details>
    

  #### Fork: 
        
    A copy can be made of a repository by forking the repository.  The copy can then be viewed and changed without affecting the original repository. 
    
      - From your list of repositories select the repository you want to fork.
      - On the top of the page to the right had side you will see a fork image.  Click on the button to create a copy. 

      
  <details open>
<summary>Fork Preview Image</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1642789173/kitchen-nippers/fork-preview_xraeo2.png"></p>

</details>


  #### Clone: 
        
    Cloning this project from GitHub can be done by following these steps: 
    
      - From your list of repositories select the repository you want to deploy.
      - Click on the code tabe. 
      - Click on the clipboard icon to copy the URL.  
      - Open Git Bash in your IDE. 
      - Change the current working directory to the location you want to place the clone. 
      - Type git clone and paste the copied URL.  
      - Press enter for the clone to be created. .

  <details open>
<summary>Clone Preview Image</summary>
<br>
<p align="center"><img src="https://res.cloudinary.com/rockymiss/image/upload/v1642790166/kitchen-nippers/clone-preview_kkvsfx.png"></p>

</details>
<br>


-----
## Acknowledegments/Conclusion

The site could not be completed without the help and support from 
 the Slack Community, my cohort facilitator Kasia and msletb class.  I'm not going to lie I found this particular section of the course very difficult.  If I had more time I think I would have benefitted from more run throughs of projects to get a better understanding of how to start, go through and finalise a project.  Mind you throwing a person in the deep end can sometimes force them to work harder for something they want.  It was definitely a rollercoaster and while the towel was ready to be thrown in I kept a hold of it.  Onwards and upwards!   

Rachel Rock March 2022
