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
let gameTimer;
let num;
let display;
let min;


//Event Listeners
getUserDetails.addEventListener('submit', getFormDetails);
playBirdGame.addEventListener('click', startBirdGame);
playCartoonGame.addEventListener('click', startCartoonGame);
playFeatherGame.addEventListener('click', startFeatherGame);
choiceReturn.addEventListener('click', returnToChoice);

//Link flip lives variable to dom and set to setlives 
countLives.textContent = `${setLives} flips left`;

/**
 * 
 * Function to start countup timer
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
 * Function to display timer
 */
function timerDisplay() {
    let min = 60 * 0.0001;
    clearInterval(gameTimer);
    display = document.querySelector('#timer');
    startTimer(min, display);
}

function showCongrats () {
    let myTime = document.getElementById('timer').innerText;
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Congratulations you won the game with a time of ${myTime}!`;
    startTimer(min, display);
    restartGame();
}

function showHardLuck () {
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Sorry you lost!`;
    
    restartGame();
    
}

function returnToChoice () {
    congratsContainer.classList.add('hide');
    gameSelect.classList.remove('hide');
    setLives = 8;
    countLives.textContent = `${setLives} flips left`;
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
 * Function to start bird game
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
 * Function to start Feather game
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
 * Function to start cartoon game
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
 * 
 * function to make the cards run randomingly
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
 * Place cards into the html
 */

 let cardGenerator = (num) => {
    let cardInfo = randomCards(num);
   
   
    deleteChild();
    //generate 16 cards
   
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
    //give card a name attribute to match cards
    cardElement.setAttribute('name', item.name);
    cardFace.setAttribute('alt', item.name);
    //attach cards to section
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
            countLives.textContent = `${setLives} flips left`;
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
