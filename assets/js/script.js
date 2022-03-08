/* jshint esversion: 8, jquery: true */

//execute JS code after page is loaded
document.addEventListener("DOMContentLoaded", function(){
});
//variables
const detailsContainer = document.getElementById('details-container');
const welcomeContainer = document.getElementById('welcome-container');
const gameSelect = document.getElementById('game-select-container');
const section = document.querySelector('section');
let countLives = document.getElementById('flips');
let setLives = 8;
const getUserDetails = document.getElementById('name-form');
const playBirdGame = document.getElementById('bird-btn');
const playCartoonGame = document.getElementById('cartoon-btn');
const playFeatherGame = document.getElementById('feather-btn');
const choiceReturn = document.getElementById('game-choice');
const congratsContainer = document.getElementById('congrats');
const goHome = document.getElementById('logo');
let gameTimer;
let num;
let display;

//Event Listeners
getUserDetails.addEventListener('submit', getFormDetails);
playBirdGame.addEventListener('click', startBirdGame);
playCartoonGame.addEventListener('click', startCartoonGame);
playFeatherGame.addEventListener('click', startFeatherGame);
choiceReturn.addEventListener('click', returnToChoice);
goHome.addEventListener('click', goToWelcomePage);

//Link flip lives variable to dom and set to setlives 
countLives.textContent = `Flips Left: ${setLives}`;

/**
 * 
 * Function to return to homescreen 
 * 
 */
 function goToWelcomePage() {
    section.classList.add('hide');
    congratsContainer.classList.add('hide');
    gameSelect.classList.add('hide');
    welcomeContainer.classList.remove('hide');
    detailsContainer.classList.add('hide');
 }
/**
 * 
 * Function to create timer that will increase and display 
 * in the DOM
 * Found on stackoverflow - see readme
 */
function startTimer(duration, display) {
    let timer = duration;
    let minutes;
    let seconds;

    gameTimer = setInterval (function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++timer < 0) {
            timer = duration;
        }
    }, 1000);
}

/**
 * 
 * Function to display timer - stackoverflow
 */
function timerDisplay() {
    let min = 60 * 0.0001;
    clearInterval(gameTimer);
    display = document.querySelector('#timer');
    startTimer(min, display);
}

/**
 * Function that will congratulate the user if they
 * win the game.  This will also restart the game
 */

function showCongrats () {
    let myTime = document.getElementById('timer').innerText;
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Congratulations you won the game with a time of ${myTime}!`;
    restartGame();
}

/**
 * Function that will show a container saying they lost
 * This function also starts the game
 */

function showHardLuck () {
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Sorry you lost!`;
    restartGame(); 
}

/**
 * Function that will allow the user to return to the choice container
 * This function will also reset lives otherwise lives will go into 
 * minus figures.
 */

function returnToChoice () {
    congratsContainer.classList.add('hide');
    gameSelect.classList.remove('hide');
    setLives = 8;
    countLives.textContent = `Flips Left: ${setLives}`;
}

/**
 * 
 * Function to get username, hide input and 
 * display game choices 
 */
 function getFormDetails(event) {
    event.preventDefault();//prevents the page from reloading after submit
    let name = document.getElementById('user-name');
    welcomeContainer.classList.add('hide');   
    gameSelect.classList.remove('hide');  
    detailsContainer.classList.add('hide');
    document.getElementById('name-result').textContent = `Hello ${name.value} please choose an option below`;
}
/**
 * 
 * This function is used to start the bird game.  num 1 is used to retrieve the
 * image data for birds and will be used in the randomCards 
 * and cardGenerator functions.  This function also 
 * displays the timer and hides and removes classes and generates cards.
 */

 function startBirdGame(event) {
    num = 1;
    timerDisplay();
    event.preventDefault();
    gameSelect.classList.add('hide');
    section.classList.remove('hide');
    detailsContainer.classList.remove('hide');  
    cardGenerator(1);  
}
/**
 * 
 * This function is used to start the feather game.  num 2 is used to retrieve the
 * image data for feathers and will be used in the randomCards 
 * and cardGenerator functions.  This function also 
 * displays the timer and hides and removes classes and generates cards.
 */
function startFeatherGame(event) {
    num = 2;
    timerDisplay();
    event.preventDefault();
    gameSelect.classList.add('hide');
    section.classList.remove('hide');
    detailsContainer.classList.remove('hide');  
    cardGenerator(2);  
}
/**
 * 
 * This function is used to start the cartoon game.  num 3 is used to retrieve the
 * image data for cartoons and will be used in the randomCards 
 * and cardGenerator functions.  This function also 
 * displays the timer and hides and removes classes and generates cards.
 */
function startCartoonGame(event) {
    num = 3;
    timerDisplay();
    event.preventDefault();
    gameSelect.classList.add('hide');
    section.classList.remove('hide');
    detailsContainer.classList.remove('hide');  
    cardGenerator(3);  
}

/**
 * This function gets the correct image data for each game
 * @param {*refers to all available data} num 
 * @returns 
 */
 const randomCards = (num) => {
    let cardInfo = [];
    if(num == 1) {
        cardInfo = getImageData();
    } else if (num == 2) {
        cardInfo = getFeatherData();
    } else if (num == 3) {
        cardInfo = getCartoonData();
    } else {
        cardInfo = getImageData();
    }
    cardInfo.sort(() => Math.random() - 0.5);
        return cardInfo;
};

/**
 * This function puts all of the cards into the DOM
 * @param {correct card data to target} num
 * This is code I followed from a develpedbyEd youtube video
 * see readme for further details.  The also attribute was added
 * by me for accessibility 
 */
 let cardGenerator = (num) => {
    let cardInfo = randomCards(num);
     
    deleteChild();//deletes child to avoid duplication on restart
    
    //generates 16 cards
       cardInfo.forEach((item) => {
        //get html
    const cardElement = document.createElement('div');
    const cardFace = document.createElement('img');
    const cardBack = document.createElement('div');
    //add class to cards
    cardElement.classList = 'card';
    cardFace.classList = 'face-card';
    cardBack.classList = 'back-card';
    //attach face to card 
    cardFace.src = item.imgSrc;
    //gives card a name attribute to match cards
    cardElement.setAttribute('name', item.name);
    cardFace.setAttribute('alt', item.name);//required for accessibility
    //attaches cards to section
    section.appendChild(cardElement);
    cardElement.appendChild(cardFace);
    cardElement.appendChild(cardBack);
    //click rotate cards    
    cardElement.addEventListener('click', (e) => {
        cardElement.classList.toggle("toggle-cards");
        matchCards(e);
    });
    });   
};
/**
 * * This function is required as the cards need to be 
 * deleted (deleteChild()) otherwise the cards
 *  will be appended over and over again.
 * code from https://www.w3schools.com/jsref/met_node_removechild.asp
 */
function deleteChild() {
        let e = document.querySelector("section");
        
        //e.firstElementChild can be used.
        let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }

/**
 * function to check the cards match when clicked the event(e) will
 * capture data
 * and the target is the element that was clicked 
 * code from developedbyEd (see readme) with some changes
 * for showing and hiding containers 
 */
const matchCards = (e) => {
    const cardClicked = e.target;
    cardClicked.classList.add('flipped-card');
    
    const flippedCards = document.querySelectorAll('.flipped-card');
    const toggleCard = document.querySelectorAll('.toggle-cards');
        if (flippedCards.length === 2) {
        if(
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name')
        ) {
            
            //match
                flippedCards.forEach((card) => {
                card.classList.remove('flipped-card');
                card.style.pointerEvents = "none";
            });
        } else {
            
            // wrong
                flippedCards.forEach((card) => {
                card.classList.remove('flipped-card');
                setTimeout(() => card.classList.remove('toggle-cards'), 1000);
            });
            //player lives
            setLives--;
            countLives.textContent = `Flips left: ${setLives} `;
            if(setLives === 0) {
                setTimeout(() => {
                detailsContainer.classList.add('hide');
                showHardLuck();
                });
    
            }      
        }
    }  
   //if user wins game
   if(toggleCard.length === 16){
       setTimeout(() => {
           detailsContainer.classList.add('hide');
           showCongrats();
           
       }, 1000);
   } 
};

/**
 * Restarts Game 
 * Code from developedbyEd see readme
 */ 
    const restartGame = () => {
        let cardInfo = randomCards();
        let cardFaces = document.querySelectorAll('.face-card');
        let cards = document.querySelectorAll('.card');
        section.style.pointerEvents = 'none';
        cardInfo.forEach((item,index) => {
            cards[index].classList.remove('toggle-cards');
          setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            cardFaces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);//sets name back too
            section.style.pointerEvents ='all';
          }, 1000);  
        });
        setLives = 8;
        countLives.textContent = setLives;
    };
